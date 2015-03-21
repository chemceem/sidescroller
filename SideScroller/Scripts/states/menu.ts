﻿/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/fuel.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/barricade.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

/// <reference path="../objects/scoreboard.ts" />

module states {
    // MENU STATE CLASS
    export class Menu {
        // Game Objects 
        public game: createjs.Container;
        public ocean: objects.Road;
        public sideScroller: objects.Label;
        public playButton: objects.Button;
        public play: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            

            // Instantiate Game Container
            this.game = new createjs.Container();

            //Ocean object
            this.ocean = new objects.Road();
            this.game.addChild(this.ocean);

            //Game Over Label
            this.sideScroller = new objects.Label(320, 40, "SIDE SCROLLER");
            this.sideScroller.font = "60px Consolas";
            this.sideScroller.regX = this.sideScroller.getMeasuredWidth() * 0.5;
            this.sideScroller.regY = this.sideScroller.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.sideScroller);


            //Play Button
            this.playButton = new objects.Button(320, 280, "playButton");
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

            this.ocean.update();

            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Menu Class


} // States Module