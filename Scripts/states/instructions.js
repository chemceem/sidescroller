/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    var Instructions = (function () {
        function Instructions() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.road = new objects.Road();
            this.game.addChild(this.road);
            //Heading Label
            this.headingLabel = new objects.Label(300, 40, "GAME INSTRUCTIONS");
            this.headingLabel.font = "60px Consolas";
            this.headingLabel.regX = this.headingLabel.getMeasuredWidth() * 0.5;
            this.headingLabel.regY = this.headingLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.headingLabel);
            //Instructions Label
            this.instruction = new objects.Label(370, 120, this.getInstructions());
            this.instruction.font = "20px Consolas";
            //Setting up postion of the instruction label
            this.instruction.regX = this.headingLabel.getMeasuredWidth() * 0.5;
            this.instruction.regY = this.headingLabel.getMeasuredLineHeight() * 0.5;
            var w = (this.instruction.getMeasuredWidth()) * this.instruction.scaleX;
            var h = (this.instruction.getMeasuredHeight()) * this.instruction.scaleY;
            this.instruction.textAlign = 'left';
            this.instruction.lineWidth = 500;
            this.game.addChild(this.instruction);
            //Play Button
            this.playButton = new objects.Button(320, 350, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        }
        Instructions.prototype.playClicked = function () {
            this.play = true;
        };
        Instructions.prototype.update = function () {
            this.road.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE; // change game state to play
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        /* Method to change instructions*/
        Instructions.prototype.getInstructions = function () {
            return "\n\n\n\n 1. Move mouse left and right to move the car.\n\n" + " 2. Avoid hitting the barricades. Each collision would take away a life.\n\n" + " 3. Try to catch the fuel. Each fuel would earn you 100 points. \n\n" + " 4. Collect 1000 points to earn an extra life.";
            " May the force be with you. Good Luck.\n\n";
        };
        return Instructions;
    })();
    states.Instructions = Instructions;
})(states || (states = {}));
//# sourceMappingURL=instructions.js.map