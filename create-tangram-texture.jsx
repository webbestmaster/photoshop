

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// in case we double clicked the file
app.bringToFront();

app.preferences.rulerUnits = Units.PIXELS;

var srcDoc = app.activeDocument;

srcDoc.selection.select(Array (Array(0, 512), Array(512, 1024), Array(0, 1024)), SelectionType.REPLACE, 0, false);

srcDoc.selection.copy();
srcDoc.paste();

var layer = srcDoc.activeLayer;
layer.translate(100, 100);
layer.rotate(45);



/*

var pasteDoc = app.documents.add(Number(1000), Number(1000), srcDoc.resolution, "Paste Target");
pasteDoc.paste();
pasteDoc.layers[1].remove();

//Options to export to PNG files
var options = new ExportOptionsSaveForWeb();

options.format = SaveDocumentType.PNG;
options.PNG8 = false;
options.transparency = true;
options.optimized = false;

//Export Save for Web in the current folder
pasteDoc.exportDocument(File(srcDoc.path+'/export '+ 1 +'.png'),ExportType.SAVEFORWEB, options);

//Close the temp document without saving the changes
pasteDoc.close(SaveOptions.DONOTSAVECHANGES);

pasteDoc = null;

*/
