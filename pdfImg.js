document.getElementById('pdf-upload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file.');
        return;
    }
    
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        
        pdfjsLib.getDocument({data: data}).promise.then(function(pdf) {
            var container = document.getElementById('pdf-container');
            container.innerHTML = '';

            for (var i = 1; i <= pdf.numPages; i++) {
                renderPage(pdf, i);
            }
        });
    };
    reader.readAsArrayBuffer(file);
});

function renderPage(pdf, pageNumber) {
    pdf.getPage(pageNumber).then(function(page) {
        var viewport = page.getViewport({scale: 1.5});
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        page.render(renderContext).promise.then(function() {
            var img = document.createElement('img');
            img.src = canvas.toDataURL();
            document.getElementById('pdf-container').appendChild(img);
        });
    });
}