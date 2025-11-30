gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.idToCallbackMap = new Map();
gdjs.GAME_32OVERCode.GDNUBObjects1= [];
gdjs.GAME_32OVERCode.GDNUBObjects2= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2= [];


gdjs.GAME_32OVERCode.mapOfGDgdjs_9546GAME_959532OVERCode_9546GDBlackDecoratedButtonObjects1Objects = Hashtable.newFrom({"BlackDecoratedButton": gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1});
gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GAME_32OVERCode.mapOfGDgdjs_9546GAME_959532OVERCode_9546GDBlackDecoratedButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
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

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDNUBObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNUBObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList0(runtimeScene);
gdjs.GAME_32OVERCode.GDNUBObjects1.length = 0;
gdjs.GAME_32OVERCode.GDNUBObjects2.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
