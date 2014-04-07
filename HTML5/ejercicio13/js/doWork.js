this.addEventListener('message', function(e) {
    var number = e.data;

    var result = [];

    for (var i = 1; i <= number; i++) {
        var primo = true;

        for (var j = 2; j < i && primo; j++) {
            primo = (i % j != 0);
        }

        if (primo) {
            result.push(i);
        }
    }

    console.log(result);
    this.postMessage(result);

    this.close();
}, false);