gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.idToCallbackMap = new Map();
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMoveJoystickObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDBulletObjects1= [];
gdjs.Game_32SceneCode.GDBulletObjects2= [];
gdjs.Game_32SceneCode.GDEnemyBulletObjects1= [];
gdjs.Game_32SceneCode.GDEnemyBulletObjects2= [];
gdjs.Game_32SceneCode.GDNewTextObjects1= [];
gdjs.Game_32SceneCode.GDNewTextObjects2= [];
gdjs.Game_32SceneCode.GDmenuObjects1= [];
gdjs.Game_32SceneCode.GDmenuObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects1Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Game_32SceneCode.GDEnemyBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Game_32SceneCode.GDBulletObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTopDown_95959595CharacterObjects1Objects = Hashtable.newFrom({"TopDown_Character": gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects1Objects = Hashtable.newFrom({"EnemyBullet": gdjs.Game_32SceneCode.GDEnemyBulletObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "EnemySpawn") >= 2;
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), -(50), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawn");
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].rotateTowardAngle(180, 0, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Game_32SceneCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBackgroundObjects1[i].setYOffset(gdjs.Game_32SceneCode.GDBackgroundObjects1[i].getYOffset() - (1));
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].addPolarForce(90, 100, 0);
}
}
{/* Unknown object - skipped. */}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1);
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;

gdjs.Game_32SceneCode.GDEnemyBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[i].getBehavior("FireBullet").Fire((gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, (gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[i].getAngle()), 500, null);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("FireBullet").Fire((gdjs.Game_32SceneCode.GDEnemyObjects1[i].getCenterXInScene()), (gdjs.Game_32SceneCode.GDEnemyObjects1[i].getCenterYInScene()), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects1Objects, (gdjs.Game_32SceneCode.GDEnemyObjects1[i].getAngleToPosition((( gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[0].getCenterXInScene()), (( gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1[0].getCenterYInScene()))), 200, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Game_32SceneCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBulletObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBulletObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}
{for(var i = 0, len = gdjs.Game_32SceneCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects1[k] = gdjs.Game_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBullet"), gdjs.Game_32SceneCode.GDEnemyBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopDown_Character"), gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTopDown_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyBulletObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME OVER", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.Game_32SceneCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDmenuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDmenuObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDmenuObjects1[k] = gdjs.Game_32SceneCode.GDmenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDmenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "MENU");
}
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDmenuObjects1.length = 0;
gdjs.Game_32SceneCode.GDmenuObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList0(runtimeScene);
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDTopDown_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMoveJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyBulletObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDmenuObjects1.length = 0;
gdjs.Game_32SceneCode.GDmenuObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
