/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/fuel.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/barricade.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.play = false;
            this.instruction = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.road = new objects.Road();
            this.game.addChild(this.road);
            //Game Over Label
            this.sideScroller = new objects.Label(320, 40, "SIDE SCROLLER");
            this.sideScroller.font = "60px Consolas";
            this.sideScroller.regX = this.sideScroller.getMeasuredWidth() * 0.5;
            this.sideScroller.regY = this.sideScroller.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.sideScroller);
            //Play Button
            this.playButton = new objects.Button(320, 220, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);
            this.instructionButton = new objects.Button(320, 320, "instructionsButton");
            this.instructionButton.on("click", this.instructionsClicked, this);
            this.game.addChild(this.instructionButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Menu.prototype.playClicked = function () {
            this.play = true;
        };
        Menu.prototype.instructionsClicked = function () {
            this.instruction = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.update = function () {
            this.road.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            else if (this.instruction) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.INSTRUCTION_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu;
    })();
    states.Menu = Menu; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu.js.map