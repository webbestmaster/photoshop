app.bringToFront();

var srcDoc = app.activeDocument;

// srcDoc.activeLayer = app.activeDocument.layers[app.activeDocument.layers.length - 1];

var p0 = 0,
    p1 = 256,
    p2 = 512,
    p3 = 768,
    p4 = 1024;

var figures = [
    {
        name: 'square',
        selection: [[p3, p3], [p2, p4], [p1, p3], [p2,p2]]
    },
    {
        name: 'parallelogram',
        selection: [[p0,p0], [p1, p1], [p1, p3], [p0, p2]],
        translate: [0, 0],
        rotate: 0 // angle of rotate
    }


];

for (var i = 0, len = figures.length; i < len; i += 1) {
    savePiece(figures[i]);
}


function savePiece(figure) {

    // srcDoc.selection.deselect();

    // make selection
    srcDoc.selection.select(figure.selection, SelectionType.REPLACE, 0, false);

    // select and copy selection
    srcDoc.selection.copy();
    srcDoc.paste();

    var newLayer = srcDoc.activeLayer;

    figure.translate && newLayer.translate(figure.translate[0], figure.translate[1]);
    figure.rotate && newLayer.rotate(figure.rotate);

    var bounds = newLayer.bounds;
    var b1 = bounds[1],
        b2 = bounds[2],
        b3 = bounds[3],
        b0 = bounds[0];

    srcDoc.selection.select([
        [b0, b1],
        [b2, b0],
        [b2, b3],
        [b0, b3]
    ], SelectionType.REPLACE, 0, false);
    srcDoc.selection.copy();

    var width = b2 - b0; //Grab the W value
    var height = b3 - b1; //Grab the H value

    var pasteDoc = app.documents.add(width, height, srcDoc.resolution, "Paste Target");
    pasteDoc.paste();
    pasteDoc.layers[1].remove();

    var options = new ExportOptionsSaveForWeb();

    options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    options.transparency = true;
    options.optimized = false;

    pasteDoc.exportDocument(File(srcDoc.path+'/texture-' + srcDoc.name.replace(/\.[^\.]*?$/, '') + '-' + figure.name + '.png'), ExportType.SAVEFORWEB, options);

    pasteDoc.close(SaveOptions.DONOTSAVECHANGES);

    newLayer.remove();

}
