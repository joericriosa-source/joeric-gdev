gdjs.HOMECode = {};
gdjs.HOMECode.localVariables = [];
gdjs.HOMECode.idToCallbackMap = new Map();
gdjs.HOMECode.GDPLAY_9595BUTTONObjects1= [];
gdjs.HOMECode.GDPLAY_9595BUTTONObjects2= [];


gdjs.HOMECode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PLAY_BUTTON"), gdjs.HOMECode.GDPLAY_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HOMECode.GDPLAY_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.HOMECode.GDPLAY_9595BUTTONObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.HOMECode.GDPLAY_9595BUTTONObjects1[k] = gdjs.HOMECode.GDPLAY_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.HOMECode.GDPLAY_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.HOMECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HOMECode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.HOMECode.GDPLAY_9595BUTTONObjects2.length = 0;

gdjs.HOMECode.eventsList0(runtimeScene);
gdjs.HOMECode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.HOMECode.GDPLAY_9595BUTTONObjects2.length = 0;


return;

}

gdjs['HOMECode'] = gdjs.HOMECode;
