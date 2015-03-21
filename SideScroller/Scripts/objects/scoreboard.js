var objects;
(function (objects) {
    /*
     * This class is responsible
     * for displaying the score
     * and the lives left of the player
     */
    var ScoreBoard = (function () {
        function ScoreBoard(game) {
            this.score = 0;
            this.lives = 5;
            this.active = true;
            this.livesLabel = new createjs.Text("Lives: ", "40px Consolas", "#ffff00");
            game.addChild(this.livesLabel);
            this.scoreLabel = new createjs.Text("Score: ", "40px Consolas", "#ffff00");
            this.scoreLabel.x = 400;
            game.addChild(this.scoreLabel);
        }
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map