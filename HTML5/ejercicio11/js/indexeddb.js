window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction ||
                window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange ||
                window.webkitIDBKeyRange || window.msIDBKeyRange;

var db = null;

function onerror(e) {
    console.log(e);
}

function open () {
    var version = 4;
    var request = indexedDB.open("todo-list", version);

    request.onupgradeneeded = function(e) {
        db = e.target.result;

        var store = db.createObjectStore("todo-list",
                    { keyPath: "timeStamp" });

        store.createIndex('pendiente', 'pendiente', { unique: false });
    };

    request.onerror = onerror;

    request.onsuccess = function(e) {
        console.log("DB opened");

        db = e.target.result;
    };
}

function add (todoText) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var data = {
        "text": todoText,
        "pendiente": false,
        "timeStamp": new Date().getTime()
    };

    var request = addTask(data, store);

    request.onsuccess = function(e) {
        console.log("Sucessful add: "+e);
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };
}

function remove (todoText) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var request = removeTask(todoText, store);

    request.onsuccess = function(e) {
        console.log("Sucessful remove: "+e);

        console.log(JSON.stringify(request.result));
    };

    request.onerror = function(e) {
        console.log("Error removing: ", e);
    };
}

function update (todoText) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var request = updateTask(todoText, store);

    request.onsuccess = function(e) {
        console.log("Sucessful update: "+e);

        request.result.pendiente = true;

        store.put(request.result);
    };

    request.onerror = function(e) {
        console.log("Error updating: ", e);
    };
}

function getAllTodoItems(completado) {
    var todos = document.getElementById("todoItems");
    todos.innerHTML = "";

    var transaction = db.transaction(["todo-list"]);
    var store = transaction.objectStore("todo-list");

    var idbKeyRange = IDBKeyRange.only("true");
    var cursorRequest = store.openCursor(idbKeyRange);

//    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result == false) return;

        todos.innerHTML += "<li>" + JSON.stringify(result.value) + "</li>";
        console.log(result.value)
        result.continue();
    };

    store.transaction.oncomplete = function(event){
        console.log("Transaccion Completa...");
    }

    cursorRequest.onerror = onerror;
};

function addTodo() {
    var todo = document.getElementById("todo");
    add(todo.value);
    todo.value = "";
}

function removeTodo() {
    var todo = document.getElementById("todo");
    remove(todo.value);
    todo.value = "";
}

function updateTodo() {
    var todo = document.getElementById("todo");
    update(todo.value);
    todo.value = "";
}

function init() {
    open();
    //indexedDB.deleteDatabase("todo-list");
}

window.addEventListener("DOMContentLoaded", init, false);

function addTask(task, store) {
    return store.put(task);
}

function removeTask(id, store) {
    var request = store.get(parseInt(id));

    store.delete(parseInt(id));

    return request;
}

function updateTask(id, store) {
    return store.get(parseInt(id));
}
