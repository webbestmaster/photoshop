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
        name: 'png file name',
        selection: [[p0,p0], [p4, p0], [p2, p2]],
        translate: [0, 0],
        rotate: 0 // angle of rotate
    }
];

for (var i = 0, len = figures.length; i < len; i += 1) {
    savePiece(figures[i]);
}


function savePiece(figure) {
    // make selection
    srcDoc.selection.select(figure.selection, SelectionType.REPLACE, 0, false);

    // select and copy selection
    srcDoc.selection.copy();
    srcDoc.paste();

    var newLayer = srcDoc.activeLayer;

    newLayer.translate(figure.translate[0], figure.translate[1]);
    newLayer.rotate(figure.rotate);

    var bounds = newLayer.bounds;

    var width = bounds[2] - bounds[0]; //Grab the W value
    var height = bounds[3] - bounds[1]; //Grab the H value

    var b1 = bounds[1],
        b2 = bounds[2],
        b3 = bounds[3],
        b0 = bounds[0];

    srcDoc.selection.select([
        [b1, b0],
        [b2, b0],
        [b2, b3],
        [b1, b3]
    ], SelectionType.REPLACE, 0, false);
    srcDoc.selection.copy();

    var pasteDoc = app.documents.add(width, height, srcDoc.resolution, "Paste Target");
    pasteDoc.paste();
    pasteDoc.layers[1].remove();

    var options = new ExportOptionsSaveForWeb();

    options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    options.transparency = true;
    options.optimized = false;

    pasteDoc.exportDocument(File(srcDoc.path+'/export ' + srcDoc.name + figure.name +'.png'), ExportType.SAVEFORWEB, options);

    pasteDoc.close(SaveOptions.DONOTSAVECHANGES);

    newLayer.remove();

}
