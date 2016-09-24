app.bringToFront();

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var p0 = 0,
    p1 = 256,
    p2 = 512,
    p3 = 768,
    p4 = 1024;

var figures = [
    {
        name: 'triangleBig-1',
        selection: [[p0, p0], [p4, p0], [p2, p2]]
    },
    {
        name: 'triangleBig-2',
        selection: [[p4, p0], [p4, p4], [p2, p2]]
    },
    {
        name: 'triangleMedium',
        selection: [[p0, p2], [p2, p4], [p0, p4]],
        translate: [p1, -p1],
        rotate: 135 // angle of rotate
    },
    {
        name: 'triangleSmall-1',
        selection: [[p1, p1], [p2, p2], [p1, p3]]
    },
    {
        name: 'triangleSmall-2',
        selection: [[p3, p3], [p4, p4], [p2, p4]]
    },
    {
        name: 'square',
        selection: [[p3, p3], [p2, p4], [p1, p3], [p2, p2]]
    },
    {
        name: 'parallelogram',
        selection: [[p0, p0], [p1, p1], [p1, p3], [p0, p2]]
    }
];

var data = [
    [
        'f66eba',
        'e5007e',
        'b50164',
        'd0639d',
        'f795de',
        'e8a6ca',
        'e4449c'
    ],
    [
        'c04152',
        'f9363c',
        'c04257',
        'c42e39',
        'cc5267',
        '73323a',
        '71323a'
    ],
    [
        '57c0bc',
        '2b8e8b',
        '9dc7c6',
        'aae1de',
        '035f5c',
        '01a09b',
        '7fbbb9'
    ],
    [
        'f00',
        '333',
        '69f',
        'f0f',
        '639',
        'fc0',
        '5fc92b'
    ],
    [
        '747146',
        '553e36',
        '82622f',
        '000',
        '543d35',
        '82622f',
        '553e36'
    ],
    [
        '5a7852',
        'bf882d',
        '5a7852',
        '5f7b56',
        'bf882d',
        'bb5427',
        'ab2025'
    ],
    [
        'b96e2a',
        'c18429',
        '485656',
        '667f79',
        'b96e2a',
        '6d301e',
        'b5babd'
    ],
    [
        'ba4481',
        'c2435e',
        '53564b',
        'b74380',
        '7a7d68',
        '693371',
        'b8bab5'
    ],
    [
        '0d5746',
        'bf6c28',
        'bb5127',
        '177f5c',
        'bb5127',
        '6e2114',
        '49a5bc'
    ],
    [
        'f4c34a',
        '4f1b59',
        '4a7561',
        'b61e5b',
        'ef4923',
        '4a7561',
        '277697'
    ],
    [
        'ed8221',
        '68bce7',
        '0fa00f',
        'eae500',
        '0040e5',
        '00e5a5',
        'e500ce'
    ],
    [
        'fe3c3c',
        'ffff3b',
        '0000fe',
        'fef4b7',
        '000',
        'fffff3',
        '98ff00'
    ],
    [
        '7cff00',
        '187500',
        'ffe700',
        '0e5186',
        '60f',
        '00bcff',
        'ff720f'
    ],
    [
        'fec900',
        '00a3e8',
        'ff7f26',
        'feaec7',
        'ed1c21',
        '21b24b',
        'a349a3'
    ],
    [
        '91ed2f',
        '007ddd',
        'ff4115',
        '7b5fc5',
        'ffb400',
        'fffc00',
        '6de9ff'
    ],
    [
        '68c0d2',
        'c9e891',
        'f8cb2c',
        'f195c8',
        'f9f223',
        'a796c2',
        'ef3d61'
    ],
    [
        'ff9c00',
        '009cff',
        'ff9cd2',
        'ff1414',
        'aa4fc2',
        '00ff00',
        'ffff00'
    ]
];

function createPattern(colors, name) {

    // create document
    var doc = app.documents.add(1024, 1024, null, name);

    for (var i = 0, len = figures.length; i < len; i += 1) {
        var figure = figures[i];
        var color = colors[i];
        doc.selection.select(figure.selection, SelectionType.REPLACE, 0, false);

        var fillColor = new SolidColor();
        fillColor.rgb.red = hexToRgb(color).r;
        fillColor.rgb.green = hexToRgb(color).g;
        fillColor.rgb.blue = hexToRgb(color).b;
        doc.selection.fill(fillColor, null, 100, false);

    }

    var options = new ExportOptionsSaveForWeb();

    options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    options.transparency = true;
    options.optimized = false;

    doc.exportDocument(File('C:\/Documents and Settings\/user\/' + doc.name + '.png'), ExportType.SAVEFORWEB, options);

    doc.close(SaveOptions.DONOTSAVECHANGES);

    doc = null;
}


for (var i = 0, len = data.length; i < len; i += 1) {
    createPattern(data[i], 'solid-' + i);
}










