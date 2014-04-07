function generate() {
    worker.postMessage(document.getElementById("number").value);
}

var onMsg = function(e) {
    document.getElementById('result').textContent = e.data;
};

var onError = function(e) {
    console.log(e);
};

var worker = new Worker('js/doWork.js');
worker.addEventListener('message', onMsg, false)
worker.addEventListener('error', onError, false);
