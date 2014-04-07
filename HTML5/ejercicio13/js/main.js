window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

var onMsg = function(e) {
    document.getElementById('result').textContent = e.data;
};

var onError = function(e) {
    console.log(e);
}

window.BlobBuilder = window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder;

var xhr = new XMLHttpRequest();
xhr.open('GET', 'image/dados.png', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
    window.requestFileSystem(TEMPORARY, 1024 * 1024, function(fs) {
        fs.root.getFile('dados.png', {create: true}, function(fileEntry) {
            fileEntry.createWriter(function(writer) {
                writer.onwrite = function(e) { };
                writer.onerror = function(e) { };

                var bb = new BlobBuilder();
                bb.append(xhr.response);

                writer.write(bb.getBlob('image/png'));
            }, onError);
        }, onError);
    }, onError);
};

xhr.send();