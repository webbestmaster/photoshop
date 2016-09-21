#target photoshop

// EXPORT PNG 24 TRANSPARENT

// Function to launch the "Layer > Rasterize > with style"
// Produced with the JavaScript listener
function raterizeLayerStyle(){
    var idrasterizeLayer = stringIDToTypeID( "rasterizeLayer" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref4.putEnumerated( idLyr, idOrdn, idTrgt );
    desc5.putReference( idnull, ref4 );
    var idWhat = charIDToTypeID( "What" );
    var idrasterizeItem = stringIDToTypeID( "rasterizeItem" );
    var idlayerStyle = stringIDToTypeID( "layerStyle" );
    desc5.putEnumerated( idWhat, idrasterizeItem, idlayerStyle );
    executeAction( idrasterizeLayer, desc5, DialogModes.NO );
}

// Get current document and current layer
var docRef = app.activeDocument;
var activeLay = docRef.activeLayer;

//Duplicate the layer and rasterize it
var newLayer = activeLay.duplicate();
newLayer.rasterize(RasterizeType.ENTIRELAYER);
docRef.activeLayer = newLayer;
raterizeLayerStyle();

//Copy the content of the layer in the clipboard
newLayer.copy();

//Get the dimensions of the content of the layer
var tempWidth = newLayer.bounds[2] - newLayer.bounds[0];
var tempHeight = newLayer.bounds[3] - newLayer.bounds[1];

//Create a new document with the correct dimensions and a transparent background
var myNewDoc = app.documents.add(tempWidth,tempHeight,72,"exportedLayer", NewDocumentMode.RGB,DocumentFill.TRANSPARENT);

//Add an empty layer and paste the content of the clipboard inside
var targetLayer = myNewDoc.artLayers.add();
myNewDoc.paste();

//Set the opacity
targetLayer.opacity = activeLay.opacity;

//Options to export to PNG files
var options = new ExportOptionsSaveForWeb();
  
	options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    options.transparency = true;
	options.optimized = true;
    
//Export Save for Web in the current folder
myNewDoc.exportDocument(File(docRef.path+'/export '+ activeLay.name +'.png'),ExportType.SAVEFORWEB, options);

//Close the temp document without saving the changes
myNewDoc.close (SaveOptions.DONOTSAVECHANGES);

//Remove the temp layer
newLayer.remove();
