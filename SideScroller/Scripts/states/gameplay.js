/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/fuel.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/barricade.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    var GamePlay = (function () {
        function GamePlay() {
            this.barricade = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Road object
            this.road = new objects.Road();
            this.game.addChild(this.road);
            //Fuel object
            this.fuel = new objects.Fuel();
            this.game.addChild(this.fuel);
            //Car object
            this.car = new objects.Car();
            this.game.addChild(this.car);
            for (var barricades = 2; barricades >= 0; barricades--) {
                this.barricade[barricades] = new objects.Barricade();
                this.game.addChild(this.barricade[barricades]);
            }
            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        // Method to check the distance between the barricade and the car
        GamePlay.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        // Method to check if the car has collided with a barricade
        GamePlay.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.car.x, this.car.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition); //distance method is called
                if (theDistance < ((this.car.height * 0.3) + (collider.height * 0.3))) {
                    if (collider.isColliding != true) {
                        if (collider.name == "cloud") {
                            createjs.Sound.play(collider.sound, 100);
                            this.scoreboard.lives--;
                        }
                        if (collider.name == "island") {
                            createjs.Sound.play(collider.sound);
                            this.fuel.reset();
                            this.scoreboard.score += 100;
                            if (this.scoreboard.score > 0 && this.scoreboard.score % 1000 == 0) {
                                this.scoreboard.lives++;
                            }
                        }
                    }
                    collider.isColliding = true;
                }
                else {
                    collider.isColliding = false;
                }
            }
        };
        GamePlay.prototype.update = function () {
            this.road.update();
            this.fuel.update();
            this.car.update();
            for (var barricades = 2; barricades >= 0; barricades--) {
                this.barricade[barricades].update();
                this.checkCollision(this.barricade[barricades]);
            }
            this.checkCollision(this.fuel);
            this.scoreboard.update();
            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes the stage
        };
        return GamePlay;
    })();
    states.GamePlay = GamePlay;
})(states || (states = {}));
//# sourceMappingURL=gameplay.js.map