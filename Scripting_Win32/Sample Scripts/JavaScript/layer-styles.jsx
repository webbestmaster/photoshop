#target photoshop
//@includepath "./lib/"
//@include "stdlib.jsx"
//@include "jam/jamEngine.jsxinc"
//@include "jam/jamStyles.jsxinc"
//@include "jam/jamUtils.jsxinc"

function vectorLayerCircle(sx, sy, ex, ey, fillColor) {
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(sTID("contentLayer"));
    desc1.putReference(cTID('null'), ref1);
    var desc2 = new ActionDescriptor();
    var desc3 = new ActionDescriptor();
    var desc4 = new ActionDescriptor();
    desc4.putDouble(cTID('Rd  '), fillColor.rgb.red);
    desc4.putDouble(cTID('Grn '), fillColor.rgb.green);
    desc4.putDouble(cTID('Bl  '), fillColor.rgb.blue);
    desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
    desc2.putObject(cTID('Type'), sTID("solidColorLayer"), desc3);
    var desc5 = new ActionDescriptor();
    desc5.putUnitDouble(cTID('Top '), cTID('#Pxl'), sy);
    desc5.putUnitDouble(cTID('Left'), cTID('#Pxl'), sx);
    desc5.putUnitDouble(cTID('Btom'), cTID('#Pxl'), ey);
    desc5.putUnitDouble(cTID('Rght'), cTID('#Pxl'), ex);
    desc2.putObject(cTID('Shp '), cTID('Elps'), desc5);
    var desc6 = new ActionDescriptor();
    desc6.putInteger(sTID("strokeStyleVersion"), 2);
    desc6.putBoolean(sTID("strokeEnabled"), false);
    desc6.putBoolean(sTID("fillEnabled"), true);
    desc6.putUnitDouble(sTID("strokeStyleLineWidth"), cTID('#Pxl'), 2);
    desc6.putUnitDouble(sTID("strokeStyleLineDashOffset"), cTID('#Pnt'), 0);
    desc6.putDouble(sTID("strokeStyleMiterLimit"), 100);
    desc6.putEnumerated(sTID("strokeStyleLineCapType"), sTID("strokeStyleLineCapType"), sTID("strokeStyleButtCap"));
    desc6.putEnumerated(sTID("strokeStyleLineJoinType"), sTID("strokeStyleLineJoinType"), sTID("strokeStyleMiterJoin"));
    desc6.putEnumerated(sTID("strokeStyleLineAlignment"), sTID("strokeStyleLineAlignment"), sTID("strokeStyleAlignInside"));
    desc6.putBoolean(sTID("strokeStyleScaleLock"), false);
    desc6.putBoolean(sTID("strokeStyleStrokeAdjust"), false);
    var list1 = new ActionList();
    desc6.putList(sTID("strokeStyleLineDashSet"), list1);
    desc6.putEnumerated(sTID("strokeStyleBlendMode"), cTID('BlnM'), cTID('Nrml'));
    desc6.putUnitDouble(sTID("strokeStyleOpacity"), cTID('#Prc'), 100);
    var desc7 = new ActionDescriptor();
    var desc8 = new ActionDescriptor();
    desc8.putDouble(cTID('Rd  '), 255);
    desc8.putDouble(cTID('Grn '), 255);
    desc8.putDouble(cTID('Bl  '), 255);
    desc7.putObject(cTID('Clr '), sTID("RGBColor"), desc8);
    desc6.putObject(sTID("strokeStyleContent"), sTID("solidColorLayer"), desc7);
    desc6.putDouble(sTID("strokeStyleResolution"), 72);
    desc2.putObject(sTID("strokeStyle"), sTID("strokeStyle"), desc6);
    desc1.putObject(cTID('Usng'), sTID("contentLayer"), desc2);
    executeAction(sTID('make'), desc1, dialogMode);
  };

var defaultRulerUnits = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

var docRef = app.documents.add(500,300);


var layerStyleObj =
{
    "blendOptions":
    {
        "fillOpacity": 70,
        "blendInterior": true
    },
    "layerEffects":
    {
        "scale": 100,
        "dropShadow":
        {
            "enabled": true,
            "mode": "multiply",
            "color":
            {
                "red": 0,
                "green": 0,
                "blue": 0
            },
            "opacity": 70,
            "useGlobalAngle": false,
            "localLightingAngle": 90,
            "distance": 3,
            "chokeMatte": 0,
            "blur": 4,
            "noise": 0,
            "antiAlias": false,
            "transparencyShape":
            {
                "name": "Linear",
                "curve":
                [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            },
            "layerConceals": true
        },
        "innerShadow":
        {
            "enabled": true,
            "mode": "multiply",
            "color":
            {
                "red": 0,
                "green": 0,
                "blue": 0
            },
            "opacity": 30,
            "useGlobalAngle": false,
            "localLightingAngle": 90,
            "distance": 3,
            "chokeMatte": 10,
            "blur": 16,
            "noise": 0,
            "antiAlias": false,
            "transparencyShape":
            {
                "name": "Linear",
                "curve":
                [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            }
        },
        "innerGlow":
        {
            "enabled": true,
            "mode": "linearDodge",
            "color":
            {
                "red": 255,
                "green": 246,
                "blue": 168
            },
            "opacity": 31,
            "glowTechnique": "preciseMatte",
            "chokeMatte": 0,
            "blur": 20,
            "shadingNoise": 0,
            "noise": 0,
            "antiAlias": true,
            "innerGlowSource": "centerGlow",
            "transparencyShape":
            {
                "name": "Half Round",
                "curve":
                [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 29,
                        "vertical": 71
                    },
                    {
                        "horizontal": 87,
                        "vertical": 167
                    },
                    {
                        "horizontal": 195,
                        "vertical": 240
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            },
            "inputRange": 43
        },
        "bevelEmboss":
        {
            "enabled": true,
            "highlightMode": "screen",
            "highlightColor":
            {
                "red": 255,
                "green": 255,
                "blue": 255
            },
            "highlightOpacity": 100,
            "shadowMode": "multiply",
            "shadowColor":
            {
                "red": 0,
                "green": 0,
                "blue": 0
            },
            "shadowOpacity": 100,
            "bevelTechnique": "softMatte",
            "bevelStyle": "innerBevel",
            "useGlobalAngle": false,
            "localLightingAngle": 90,
            "localLightingAltitude": 75,
            "strengthRatio": 80,
            "blur": 16,
            "bevelDirection": "stampIn",
            "transparencyShape":
            {
                "name": "Linear",
                "curve":
                [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            },
            "antialiasGloss": false,
            "softness": 0,
            "useShape": true,
            "mappingShape":
            {
                "name": "Half Round",
                "curve":
                [
                    {
                        "horizontal": 0,
                        "vertical": 0
                    },
                    {
                        "horizontal": 29,
                        "vertical": 71
                    },
                    {
                        "horizontal": 87,
                        "vertical": 167
                    },
                    {
                        "horizontal": 195,
                        "vertical": 240
                    },
                    {
                        "horizontal": 255,
                        "vertical": 255
                    }
                ]
            },
            "antiAlias": true,
            "inputRange": 70,
            "useTexture": false
        },
        "solidFill":
        {
            "enabled": true,
            "mode": "normal",
            "opacity": 100,
            "color":
            {
                "red": 100,
                "green": 0,
                "blue": 255
            }
        }
    }
};


var cFillColor = new SolidColor();
cFillColor.rgb.red = 255;
cFillColor.rgb.green = 0;
cFillColor.rgb.blue = 255;

for (var ix = 0 ; ix < 5; ix++) {
    for (var iy = 0; iy < 3; iy++) {
        var xpos = 25+ix*100;
        var ypos = 25+iy*100;
        var width = 20+4*3;
        var height = 20+4*3;
        vectorLayerCircle(xpos,ypos,xpos+width,ypos+height,cFillColor);
        jamStyles.setLayerStyle (null);
        layerStyleObj["layerEffects"]["solidFill"]["color"]["green"] = ix * 40;
        layerStyleObj["layerEffects"]["solidFill"]["color"]["red"] = 255-(iy * 80);
        jamStyles.setLayerStyle (layerStyleObj);
    };
};