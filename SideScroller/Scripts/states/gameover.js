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
    // GAME OVER STATE CLASS
    var GameOver = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            this.tryAgain = false;
            this.menuReturn = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.road = new objects.Road();
            this.game.addChild(this.road);
            //Game Over Label
            this.gameOverLabel = new objects.Label(320, 40, "GAME OVER");
            this.gameOverLabel.font = "60px Consolas";
            this.gameOverLabel.regX = this.gameOverLabel.getMeasuredWidth() * 0.5;
            this.gameOverLabel.regY = this.gameOverLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.gameOverLabel);
            //Final Score Label
            this.finalScoreLabel = new objects.Label(320, 120, ("FINAL SCORE: " + currentScore));
            this.game.addChild(this.finalScoreLabel);
            //High Score Label
            this.highScoreLabel = new objects.Label(320, 200, ("HIGH SCORE: " + highScore));
            this.game.addChild(this.highScoreLabel);
            //Try Again Button
            this.tryAgainButton = new objects.Button(320, 280, "tryAgainButton");
            this.tryAgainButton.on("click", this.tryAgainClicked, this);
            this.menuButton = new objects.Button(320, 400, "menuButton");
            this.menuButton.on("click", this.menuClicked, this);
            this.game.addChild(this.tryAgainButton);
            this.game.addChild(this.menuButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        GameOver.prototype.tryAgainClicked = function () {
            this.tryAgain = true;
        };
        GameOver.prototype.menuClicked = function () {
            this.menuReturn = true;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.update = function () {
            this.road.update();
            if (this.tryAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            else if (this.menuReturn) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.MENU_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GameOver;
    })();
    states.GameOver = GameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map