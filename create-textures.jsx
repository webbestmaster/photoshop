
app.bringToFront();

var srcDoc = app.activeDocument;

var p0 = 0,
    p1 = 256,
    p2 = 512,
    p3 = 768,
    p4 = 1024;

var figures = [
    {
        name: 'triangleMedium',
        selection: [[p0, p2], [p2, p4], [p0, p4]],
        translate: [p1, -p1],
        rotate: 135 // angle of rotate
    },
    {
        name: 'triangleBig-1',
        selection: [[p0, p0], [p4, p0], [p2, p2]]
    },
    {
        name: 'triangleBig-2',
        selection: [[p4, p0], [p4, p4], [p2, p2]]
    },
    {
        name: 'square',
        selection: [[p3, p3], [p2, p4], [p1, p3], [p2, p2]]
    },
    {
        name: 'parallelogram',
        selection: [[p0, p0], [p1, p1], [p1, p3], [p0, p2]]
    },
    {
        name: 'triangleSmall-1',
        selection: [[p1, p1], [p2, p2], [p1, p3]]
    },
    {
        name: 'triangleSmall-2',
        selection: [[p3, p3], [p4, p4], [p2, p4]]
    }
];

for (var i = 0, len = figures.length; i < len; i += 1) {
    savePiece(figures[i]);
}

function savePiece(figure) {

    srcDoc.selection.select(figure.selection, SelectionType.REPLACE, 0, false);

    srcDoc.selection.copy();
    srcDoc.paste();

    var newLayer = srcDoc.activeLayer;

    figure.translate && newLayer.translate(figure.translate[0], figure.translate[1]);
    figure.rotate && newLayer.rotate(figure.rotate);

    var bounds = newLayer.bounds;
    var x1 = bounds[0],
        y1 = bounds[1],
        x2 = bounds[2],
        y2 = bounds[3];

    srcDoc.selection.select([
        [x1, y1],
        [x2, y1],
        [x2, y2],
        [x1, y2]
    ], SelectionType.REPLACE, 0, false);

    srcDoc.selection.copy();

    var width = x2 - x1; //Grab the W value
    var height = y2 - y1; //Grab the H value

    var pasteDoc = app.documents.add(width, height, srcDoc.resolution, "Paste Target");
    pasteDoc.paste();
    pasteDoc.layers[1].remove();

    var options = new ExportOptionsSaveForWeb();

    options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    options.transparency = true;
    options.optimized = false;

    pasteDoc.exportDocument(File(srcDoc.path + '/texture-' + srcDoc.name.replace(/\.[^\.]*?$/, '') + '-' + figure.name + '.png'), ExportType.SAVEFORWEB, options);

    pasteDoc.close(SaveOptions.DONOTSAVECHANGES);

    newLayer.remove();

}
