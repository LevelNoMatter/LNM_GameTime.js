//=============================================================================
// LNM_GameTime.js
//=============================================================================

GameEditor.TOOLS.Time = false;
var $gameTime = null;

//=============================================================================
/*:
 * @plugindesc v1.00 Adds control of time to the game, and night / day
 * cycle. Requires LNM_GameEditorCore.js
 * @author Sebastián Cámara
 *
 * @param Time Lapse Speed
 * @desc Number of frames it takes for one second to pass, in frames
 * @default 60
 *
 * @param Show Clock
 * @desc Shows the current time in the main menu (true / false)
 * @default true
 *
 * @param ---Tints by time---
 * @default
 *
 * @param 00:00
 * @desc [R, G, B]
 * @default [15, 20, 170]
 *
 * @param 01:00
 * @desc [R, G, B]
 * @default [9, 14, 150]
 *
 * @param 02:00
 * @desc [R, G, B]
 * @default [5, 9, 129]
 *
 * @param 03:00
 * @desc [R, G, B]
 * @default [0, 4, 111]
 *
 * @param 04:00
 * @desc [R, G, B]
 * @default [0, 3, 96]
 *
 * @param 05:00
 * @desc [R, G, B]
 * @default [0, 48, 93]
 *
 * @param 06:00
 * @desc [R, G, B]
 * @default [135, 183, 192]
 *
 * @param 07:00
 * @desc [R, G, B]
 * @default [189, 235, 242]
 *
 * @param 08:00
 * @desc [R, G, B]
 * @default [217, 255, 243]
 *
 * @param 09:00
 * @desc [R, G, B]
 * @default [206, 255, 216]
 *
 * @param 10:00
 * @desc [R, G, B]
 * @default [218, 255, 206]
 *
 * @param 11:00
 * @desc [R, G, B]
 * @default [224, 255, 222]
 *
 * @param 12:00
 * @desc [R, G, B]
 * @default [255, 255, 255]
 *
 * @param 13:00
 * @desc [R, G, B]
 * @default [254, 255, 255]
 *
 * @param 14:00
 * @desc [R, G, B]
 * @default [254, 255, 210]
 *
 * @param 15:00
 * @desc [R, G, B]
 * @default [254, 255, 170]
 *
 * @param 16:00
 * @desc [R, G, B]
 * @default [255, 251, 156]
 *
 * @param 17:00
 * @desc [R, G, B]
 * @default [255, 221, 155]
 *
 * @param 18:00
 * @desc [R, G, B]
 * @default [255, 201, 157]
 *
 * @param 19:00
 * @desc [R, G, B]
 * @default [255, 148, 148]
 *
 * @param 20:00
 * @desc [R, G, B]
 * @default [247, 123, 168]
 *
 * @param 21:00
 * @desc [R, G, B]
 * @default [162, 91, 243]
 *
 * @param 22:00
 * @desc [R, G, B]
 * @default [90, 69, 220]
 *
 * @param 23:00
 * @desc [R, G, B]
 * @default [49, 42, 198]
 *
 * @param ---Custom tints---
 * @default
 *
 * @param Custom Tint 1
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 2
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 3
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 4
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 5
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 6
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 7
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 8
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 9
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @param Custom Tint 10
 * @desc [R, G, B]
 * @default [0, 0, 0]
 *
 * @help
 * ============================================================================
 * Plugin commands
 * ============================================================================
 *
 * Time PAUSE
 * Stops time. This is useful for cutscenes.
 *
 * Time PLAY
 * Reactivates time.
 *
 * Time SET hour minutes
 * Sets game’s time to a specific time.
 * -- Example:
 * Time SET 15 0
 * Sets game’s time to three in the afternoon.
 *
 * Time ADD hours minutes
 * Advances time.
 * -- Example:
 * Time ADD 2 15
 * Advances time by two hours and fifteen minutes.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * These must be set in the field Note in Map Properties.
 *
 * <Tint: R, G, B>
 * Ignores time and sets the screen tone specified in RGB color (Red, Green,
 * Blue). This is useful for darker dungeons or zones in which lighting is not
 * time dependant.
 * -- Example:
 * <Tint: 0, 0, 0>
 * Ignores time and sets the screen tone to black.
 *
 * <Tint: CustomTintID>
 * Ignores time and sets the screen tone to a Custom Tint from the Plugin
 * Manager.
 * -- Example:
 * <Tint: 8>
 * Sets the screen tone of Custom Tint 8.
 *
 * ============================================================================
 * Special thanks
 * ============================================================================
 *
 * Xelion for helping me with the translations.
 * Vlue for making the “Game Time MV” plugin. I learned from his source code.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00:
 * -- Plugin published.
 */
//=============================================================================

//=============================================================================
// Parameter variables
//=============================================================================

GameEditor.Parameters = PluginManager.parameters('LNM_GameTime');
GameEditor.TOOLS.TimeLapse = Number(GameEditor.Parameters['Time Lapse Speed'] || 60);
GameEditor.TOOLS.TimeShowClock = String(GameEditor.Parameters['Show Clock'] || true);
GameEditor.TOOLS.TimeTint = [];
GameEditor.TOOLS.TimeTint[0] = JSON.parse(String(GameEditor.Parameters['00.00'] || '[15, 20, 170]'));
GameEditor.TOOLS.TimeTint[1] = JSON.parse(String(GameEditor.Parameters['01:00'] || '[9, 14, 150]'));
GameEditor.TOOLS.TimeTint[2] = JSON.parse(String(GameEditor.Parameters['02:00'] || '[5, 9, 129]'));
GameEditor.TOOLS.TimeTint[3] = JSON.parse(String(GameEditor.Parameters['03:00'] || '[0, 4, 111]'));
GameEditor.TOOLS.TimeTint[4] = JSON.parse(String(GameEditor.Parameters['04:00'] || '[0, 3, 96]'));
GameEditor.TOOLS.TimeTint[5] = JSON.parse(String(GameEditor.Parameters['05:00'] || '[0, 48, 93]'));
GameEditor.TOOLS.TimeTint[6] = JSON.parse(String(GameEditor.Parameters['06:00'] || '[135, 183, 192]'));
GameEditor.TOOLS.TimeTint[7] = JSON.parse(String(GameEditor.Parameters['07:00'] || '[189, 235, 242]'));
GameEditor.TOOLS.TimeTint[8] = JSON.parse(String(GameEditor.Parameters['08:00'] || '[217, 255, 243]'));
GameEditor.TOOLS.TimeTint[9] = JSON.parse(String(GameEditor.Parameters['09:00'] || '[206, 255, 216]'));
GameEditor.TOOLS.TimeTint[10] = JSON.parse(String(GameEditor.Parameters['10:00'] || '[218, 255, 206]'));
GameEditor.TOOLS.TimeTint[11] = JSON.parse(String(GameEditor.Parameters['11:00'] || '[224, 255, 222]'));
GameEditor.TOOLS.TimeTint[12] = JSON.parse(String(GameEditor.Parameters['12:00'] || '[255, 255, 255]'));
GameEditor.TOOLS.TimeTint[13] = JSON.parse(String(GameEditor.Parameters['13:00'] || '[254, 255, 255]'));
GameEditor.TOOLS.TimeTint[14] = JSON.parse(String(GameEditor.Parameters['14:00'] || '[254, 255, 210]'));
GameEditor.TOOLS.TimeTint[15] = JSON.parse(String(GameEditor.Parameters['15:00'] || '[254, 255, 170]'));
GameEditor.TOOLS.TimeTint[16] = JSON.parse(String(GameEditor.Parameters['16:00'] || '[255, 251, 156]'));
GameEditor.TOOLS.TimeTint[17] = JSON.parse(String(GameEditor.Parameters['17:00'] || '[255, 221, 155]'));
GameEditor.TOOLS.TimeTint[18] = JSON.parse(String(GameEditor.Parameters['18:00'] || '[255, 201, 157]'));
GameEditor.TOOLS.TimeTint[19] = JSON.parse(String(GameEditor.Parameters['19:00'] || '[255, 148, 148]'));
GameEditor.TOOLS.TimeTint[20] = JSON.parse(String(GameEditor.Parameters['20:00'] || '[247, 123, 168]'));
GameEditor.TOOLS.TimeTint[21] = JSON.parse(String(GameEditor.Parameters['21:00'] || '[162, 91, 243]'));
GameEditor.TOOLS.TimeTint[22] = JSON.parse(String(GameEditor.Parameters['22:00'] || '[90, 69, 220]'));
GameEditor.TOOLS.TimeTint[23] = JSON.parse(String(GameEditor.Parameters['23:00'] || '[49, 42, 198]'));
GameEditor.TOOLS.TimeCustomTint = [];
GameEditor.TOOLS.TimeCustomTint[1] = JSON.parse(String(GameEditor.Parameters['Custom Tint 1'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[2] = JSON.parse(String(GameEditor.Parameters['Custom Tint 2'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[3] = JSON.parse(String(GameEditor.Parameters['Custom Tint 3'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[4] = JSON.parse(String(GameEditor.Parameters['Custom Tint 4'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[5] = JSON.parse(String(GameEditor.Parameters['Custom Tint 5'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[6] = JSON.parse(String(GameEditor.Parameters['Custom Tint 6'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[7] = JSON.parse(String(GameEditor.Parameters['Custom Tint 7'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[8] = JSON.parse(String(GameEditor.Parameters['Custom Tint 8'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[9] = JSON.parse(String(GameEditor.Parameters['Custom Tint 9'] || '[0, 0, 0]'));
GameEditor.TOOLS.TimeCustomTint[10] = JSON.parse(String(GameEditor.Parameters['Custom Tint 10'] || '[0, 0, 0]'));

//-----------------------------------------------------------------------------
// GameTime
//
//

function GameTime() {
    this.initialize.apply(this, arguments);
}

GameTime.prototype.initialize = function() {
    this._tint = [0, 0, 0];
    this._pause = false;
    this._pauseTint = false;
    this._oldTimeMinute = -1;
    this._oldTimeHour = -1;
    this.time = new Time();
}

GameTime.prototype.update = function() {
    if (!this._pause) {
        this.time.update();
    }
    if (!this._pauseTint) {
        this.updateTint();
    }
}

GameTime.prototype.updateTint = function() {
    var minute = this.getTime('minute');
    this._oldTimeMinute = minute;
    rgb = this.getNewTint(minute);
    if (rgb == this._tint) return;
    this._tint = rgb;
}

GameTime.prototype.getNewTint = function(minute) {
    var hour = this.getTime('hour');
    var ctint = GameEditor.TOOLS.TimeTint[hour];
    var ntint = null;
    if (hour + 1 != 24) {
        ntint = GameEditor.TOOLS.TimeTint[hour + 1];
    } else {
        ntint = GameEditor.TOOLS.TimeTint[0];
    }
    var r = ctint[0] - ((ctint[0] - ntint[0]) * (minute / 60));
    var g = ctint[1] - ((ctint[1] - ntint[1]) * (minute / 60));
    var b = ctint[2] - ((ctint[2] - ntint[2]) * (minute / 60));
    return [r, g, b];
}

GameTime.prototype.setTime = function(hour, minute) {
    this.time.hour = hour;
    this.time.minute = minute;
    this.time.update();
}

GameTime.prototype.addTime = function(hours, minutes) {
    if (hours) this.time.addHour(hours);
    if (minutes) this.time.addMinute(minutes);
}

GameTime.prototype.getTime = function(type) {
    return this.time.getTime(type);
}

GameTime.prototype.tint = function(index) {
    return this._tint[index];
}

GameTime.prototype.play = function() {
    this._pause = false;
    this._pauseTint = false;
}

GameTime.prototype.pause = function() {
    this._pause = true;
}

GameTime.prototype.getClock = function(string) {
	var temp;
	temp = "0" + this.time.hour;
	var hour = temp.slice(-2);
	temp = "0" + this.time.minute;
	var minutes = temp.slice(-2);
	return hour + ":" + minutes;

}

//-----------------------------------------------------------------------------
// Time
//
//

function Time() {
    this.minute = 0;
    this.hour = 0;
    this.day = 0;
}

Time.prototype.update = function() {
    if (Graphics.frameCount % GameEditor.TOOLS.TimeLapse == 0) {
        if ($gameMessage.isBusy()) {
            return;
        }
        if (SceneManager._scene.inMenu()) {
            return;
        }
        if (SceneManager._scene.inBattle()) {
            return;
        }
        this.addMinute();
    }
}

Time.prototype.addMinute = function() {
    this.minute++;
    if (this.minute == 60) {
        this.minute = 0;
        this.addHour();
    }
}

Time.prototype.addHour = function() {
    this.hour++;
    if (this.hour == 24) {
        this.hour = 0;
        this.addDay();
    }
}

Time.prototype.addDay = function() {
    this.day++;
}

Time.prototype.getTime = function(string) {
    switch (string) {
        case 'minute':
            return this.minute;
            break;
        case 'hour':
            return this.hour;
            break;
        case 'day':
            return this.day;
            break;
        default: // for debug purposes.
            var stringTime = 'Day ' + this.day.toString() + ', Time ' +
                this.hour.toString() + ':' + this.minute.toString();
            return stringTime;
    }
}

//-----------------------------------------------------------------------------
// Game_Map
//
// The game object class for a map. It contains scrolling and passage
// determination functions.

var LNM_GameTime_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
    LNM_GameTime_Game_Map_setup.call(this, mapId);
    this.processTintNotes();
}

Game_Map.prototype.processTintNotes = function() {
    if (!$dataMap.note) return;
    var notetags = $dataMap.note.split(/[\r\n]+/);
    for (var i = 0; i < notetags.length; i++) {
        var line = notetags[i];
        if (line.match(/<(?:Tint:)[ ](\d+)>/i)) {
            $gameScreen.customTint(RegExp.$1);
        }
        if (line.match(/<(?:Tint:)[ ](\d+),[ ](\d+),[ ](\d+)>/i)) {
            $gameScreen.setTint(RegExp.$1, RegExp.$2, RegExp.$3);
        }
    }
};

Game_Map.prototype.notetags = function() {
    return $dataMap.note.split(/[\r\n]+/);
}

//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.

Game_Screen.prototype.setTint = function(r, g, b) {
    $gameTime._pauseTint = true;
    $gameTime._tint = [r, g, b];
}

Game_Screen.prototype.customTint = function(index) {
    $gameTime._pauseTint = true;
    $gameTime._tint = GameEditor.TOOLS.TimeCustomTint[index];
}

//-----------------------------------------------------------------------------
// Scene_Map
//
// The scene class of the map screen.

var gameTime_Scene_Map_create = Scene_Map.prototype.create;
Scene_Map.prototype.create = function() {
    gameTime_Scene_Map_create.call(this);
    $gameTime.updateTint();
}

//-----------------------------------------------------------------------------
// Scene_Base
//
// The superclass of all scenes within the game.

var gameTime_Scene_Base_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
    gameTime_Scene_Base_update.call(this);
    $gameTime.update();
}

Scene_Base.prototype.inMenu = function() {
    return false;
}

Scene_Base.prototype.inBattle = function() {
    return false;
}

//-----------------------------------------------------------------------------
// Scene_Battle
//
// The scene class of the battle screen.

Scene_Battle.prototype.inBattle = function() {
    return true;
}

//-----------------------------------------------------------------------------
// Scene_MenuBase
//
// The superclass of all the menu-type scenes.

Scene_MenuBase.prototype.inMenu = function() {
    return true;
}

//-----------------------------------------------------------------------------
// DataManager
//
// The static class that manages the database and game objects.

var LNM_GameTime_DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
    LNM_GameTime_DataManager_createGameObjects.call(this);
    $gameTime = new GameTime();
}

var LNM_GameTime_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
    var contents = LNM_GameTime_DataManager_makeSaveContents(this);
    contents.time = $gameTime;
    return contents;
}

var LNM_GameTime_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
    LNM_GameTime_DataManager_extractSaveContents.call(this, contents);
    $gameTime = contents.time;
    var gt = new GameTime();
    var ct = new Time();
    $gameTime.__proto__ = gt.__proto__;
    $gameTime.time.__proto__ = ct.__proto__;
}

//-----------------------------------------------------------------------------
// Game_Interpreter
//
// The interpreter for running event commands.

var LNM_GameTime_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    LNM_GameTime_Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'Time') {
        switch (args[0].toLowerCase()) {
            case 'pause':
                if (args[1] && args[2]) {
                    var hour = Number(args[1]);
                    var minute = Number(args[2]);
                    $gameTime.setTime(hour, minute);
                }
                $gameTime.pause();
                break;
            case 'play':
                $gameTime.play();
                break;
            case 'set':
                var hour = Number(args[1]);
                var minute = Number(args[2]);
                $gameTime.setTime(hour, minute);
                $gameTime._pauseTint = false;
                break;
            case 'add':
                var hours = Number(args[1]);
                var minutes = Number(args[2]);
                $gameTime.addTime(hours, minutes);
                break;
        }
    }
}

//-----------------------------------------------------------------------------
// Scene_Menu
//
// The scene class of the menu screen.

var LNM_GameTime_Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    LNM_GameTime_Scene_Menu_create.call(this);
    this.createTimeWindow();
}

Scene_Menu.prototype.createTimeWindow = function() {
    this._timeWindow = new Window_Time();
    this._timeWindow.y = Graphics.boxHeight - this._timeWindow.height - this._goldWindow.height;
    this.addWindow(this._timeWindow);
}

//-----------------------------------------------------------------------------
// Window_Time
//
//

function Window_Time() {
    this.initialize.apply(this);
}

Window_Time.prototype = Object.create(Window_Base.prototype);
Window_Time.prototype.constructor = Window_Time;
Window_Time.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
	this.visible = (GameEditor.TOOLS.TimeShowClock === 'true');
}

Window_Time.prototype.windowWidth = function() {
    return 240;
}

Window_Time.prototype.windowHeight = function() {
    return this.fittingHeight(1);
}

Window_Time.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this.visible) this.refresh();
}

Window_Time.prototype.refresh = function() {
    this.contents.clear();
    this.drawText($gameTime.getClock(), 67, 0, this.contents.width, 0);
}

//=============================================================================
// Editor
//=============================================================================

var LNM_GameTime_GameEditor_initialize = Game_Editor.prototype.initialize;
Game_Editor.prototype.initialize = function() {
    PIXI.Container.call(this);
    LNM_GameTime_GameEditor_initialize.call(this);
    this._setupTimeEditor();
}

Game_Editor.prototype._setupTimeEditor = function() {
    var x = Graphics.width;
    var y = Graphics.height;
    this.addButton('Time', function() {
        $gameEditor.toggleTimeEditor();
    });
    this.labelClock = new Label(x / 2 - 5, y - 60, $gameTime.getClock());
    this.sliderTime = new ButtonSlider(x / 2 - 279, y - 30, 558, 0, 1440, function(value) {
        var calcHour = value / 60;
        var hour = Math.min(Math.floor(calcHour), 23);
        var calcMinute = calcHour - hour;
        var minute = Math.min(Math.floor(calcMinute * 60), 59);
        $gameTime.setTime(hour, minute);
        $gameEditor.updateClock();
    });
    this.addChild(this.labelClock);
    this.addChild(this.sliderTime);
    this.labelClock.visible = false;
    this.sliderTime.visible = false;
}

Game_Editor.prototype.toggleTimeEditor = function() {
    if (GameEditor.TOOLS.Lighting === true) this.toggleLightingEditor();
    GameEditor.TOOLS.Time = !GameEditor.TOOLS.Time;
    this.updateClock();
    this.updateSlider();
    this.labelClock.visible = !this.labelClock.visible;
    this.sliderTime.visible = !this.sliderTime.visible;
}

Game_Editor.prototype.updateClock = function() {
    this.labelClock.setText($gameTime.getClock());
}

Game_Editor.prototype.updateSlider = function() {
    var value = $gameTime.getTime('hour') * 60 + $gameTime.getTime('minute');
    this.sliderTime.setValue(value);
}

var LNM_GameTime_Game_Editor_toggle = Game_Editor.prototype.toggle;
Game_Editor.prototype.toggle = function() {
    LNM_GameTime_Game_Editor_toggle.call(this);
    if (GameEditor.ACTIVE) {
        $gameTime.pause();
        this.updateClock();
        this.updateSlider();
    } else {
        $gameTime.play();
    }
}
