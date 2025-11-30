gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDSquareGreenSliderObjects1= [];
gdjs.MENUCode.GDSquareGreenSliderObjects2= [];
gdjs.MENUCode.GDVOLUME_9595TEXTObjects1= [];
gdjs.MENUCode.GDVOLUME_9595TEXTObjects2= [];
gdjs.MENUCode.GDMUSIC_9595TEXTObjects1= [];
gdjs.MENUCode.GDMUSIC_9595TEXTObjects2= [];
gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1= [];
gdjs.MENUCode.GDLEAVE_9595BUTTONObjects2= [];
gdjs.MENUCode.GDNewTextObjects1= [];
gdjs.MENUCode.GDNewTextObjects2= [];
gdjs.MENUCode.GDx_9595BUTTONObjects1= [];
gdjs.MENUCode.GDx_9595BUTTONObjects2= [];


gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LEAVE_BUTTON"), gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1[k] = gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HOME", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("x_BUTTON"), gdjs.MENUCode.GDx_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDx_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDx_9595BUTTONObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDx_9595BUTTONObjects1[k] = gdjs.MENUCode.GDx_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDx_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDSquareGreenSliderObjects1.length = 0;
gdjs.MENUCode.GDSquareGreenSliderObjects2.length = 0;
gdjs.MENUCode.GDVOLUME_9595TEXTObjects1.length = 0;
gdjs.MENUCode.GDVOLUME_9595TEXTObjects2.length = 0;
gdjs.MENUCode.GDMUSIC_9595TEXTObjects1.length = 0;
gdjs.MENUCode.GDMUSIC_9595TEXTObjects2.length = 0;
gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1.length = 0;
gdjs.MENUCode.GDLEAVE_9595BUTTONObjects2.length = 0;
gdjs.MENUCode.GDNewTextObjects1.length = 0;
gdjs.MENUCode.GDNewTextObjects2.length = 0;
gdjs.MENUCode.GDx_9595BUTTONObjects1.length = 0;
gdjs.MENUCode.GDx_9595BUTTONObjects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
gdjs.MENUCode.GDSquareGreenSliderObjects1.length = 0;
gdjs.MENUCode.GDSquareGreenSliderObjects2.length = 0;
gdjs.MENUCode.GDVOLUME_9595TEXTObjects1.length = 0;
gdjs.MENUCode.GDVOLUME_9595TEXTObjects2.length = 0;
gdjs.MENUCode.GDMUSIC_9595TEXTObjects1.length = 0;
gdjs.MENUCode.GDMUSIC_9595TEXTObjects2.length = 0;
gdjs.MENUCode.GDLEAVE_9595BUTTONObjects1.length = 0;
gdjs.MENUCode.GDLEAVE_9595BUTTONObjects2.length = 0;
gdjs.MENUCode.GDNewTextObjects1.length = 0;
gdjs.MENUCode.GDNewTextObjects2.length = 0;
gdjs.MENUCode.GDx_9595BUTTONObjects1.length = 0;
gdjs.MENUCode.GDx_9595BUTTONObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;
