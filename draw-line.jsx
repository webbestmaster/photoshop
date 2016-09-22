function drawLine(startXY, endXY, width) {

    var foregroundColor = app.foregroundColor;

    foregroundColor.rgb.red = 255;
    foregroundColor.rgb.green = 255;
    foregroundColor.rgb.blue = 255;

    var desc = new ActionDescriptor();
    var lineDesc = new ActionDescriptor();
    var startDesc = new ActionDescriptor();
    startDesc.putUnitDouble(charIDToTypeID('Hrzn'), charIDToTypeID('#Pxl'), startXY[0]);
    startDesc.putUnitDouble(charIDToTypeID('Vrtc'), charIDToTypeID('#Pxl'), startXY[1]);
    lineDesc.putObject(charIDToTypeID('Strt'), charIDToTypeID('Pnt '), startDesc);
    var endDesc = new ActionDescriptor();
    endDesc.putUnitDouble(charIDToTypeID('Hrzn'), charIDToTypeID('#Pxl'), endXY[0]);
    endDesc.putUnitDouble(charIDToTypeID('Vrtc'), charIDToTypeID('#Pxl'), endXY[1]);
    lineDesc.putObject(charIDToTypeID('End '), charIDToTypeID('Pnt '), endDesc);
    lineDesc.putUnitDouble(charIDToTypeID('Wdth'), charIDToTypeID('#Pxl'), width);
    desc.putObject(charIDToTypeID('Shp '), charIDToTypeID('Ln  '), lineDesc);
    desc.putBoolean(charIDToTypeID('AntA'), true);
    executeAction(charIDToTypeID('Draw'), desc, DialogModes.NO);

}

var lineWidth = 6;

var p0 = 0,
    p1 = 256,
    p2 = 512,
    p3 = 768,
    p4 = 1024;

var lines = [
    [p0, p0, p4, p4],
    [p0, p2, p2, p4],
    [p1, p1, p1, p3],
    [p2, p4, p3, p3],
    [p4, p0, p1, p3],
    [p0, p0, p4, p0],
    [p4, p0, p4, p4],
    [p4, p4, p0, p4],
    [p0, p4, p0, p0]
];

for (var i = 0, len = lines.length; i < len; i += 1) {
    var line = lines[i];
    drawLine([line[0], line[1]], [line[2], line[3]], lineWidth);
}

