/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/fuel.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/barricade.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

module states {

    //INSTRUCTION STATE CLASS
    export class Instructions {
        // Game Objects 
        public game: createjs.Container;
        public road: objects.Road;
        public heading: objects.Label;
        public instruction: objects.Label;
        public playButton: objects.Button;
        public play: boolean = false;

        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Road object
            this.road = new objects.Road();
            this.game.addChild(this.road);

            //Heading Label
            this.heading = new objects.Label(300, 40, "GAME INSTRUCTIONS");
            this.heading.font = "60px Consolas";
            this.heading.regX = this.heading.getMeasuredWidth() * 0.5;
            this.heading.regY = this.heading.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.heading);

            //Instructions Label
            this.instruction = new objects.Label(370, 120, this.getInstructions());
            this.instruction.font = "20px Consolas";

            //Setting up postion of the instructions
            this.instruction.regX = this.heading.getMeasuredWidth() * 0.5;
            this.instruction.regY = this.heading.getMeasuredLineHeight() * 0.5;
            var w = (this.instruction.getMeasuredWidth()) * this.instruction.scaleX;
            var h = (this.instruction.getMeasuredHeight()) * this.instruction.scaleY;
            this.instruction.textAlign = 'left'
            this.instruction.lineWidth = 500;
            this.game.addChild(this.instruction);

            //Play Button
            this.playButton = new objects.Button(320, 350, "playButton");
            this.playButton.on("click", this.playClicked, this);

            this.game.addChild(this.playButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public playClicked() {
            this.play = true;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {

            this.road.update();

            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE; // change game state to play
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

        /* Method to change instructions*/
        public getInstructions() {
            return "\n\n\n\n1. Move mouse left and right to move the car\n\n" +
                " 2. Avoid the Barricades. \n\n " +
                " 3. Try to catch the fuel. It earns you 100 points." +
                " 4. Catch 1000 points and you earn an additional life." +
                " GOOD LUCK. MAY THE FORCE BE WITH YOU !!!";
        }

    }
} 