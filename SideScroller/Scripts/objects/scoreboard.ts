module objects {
   
    /*
     * This class is responsible 
     * for displaying the score 
     * and the lives left of the player
     */
    export class ScoreBoard {
        public score: number;
        public lives: number;
        public active: boolean;
        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;

       constructor(game: createjs.Container) {
            this.score = 0;
            this.lives = 5;
            this.active = true;

            this.livesLabel = new createjs.Text("Lives: ", "40px Consolas", "#ffff00");
            game.addChild(this.livesLabel);

            this.scoreLabel = new createjs.Text("Score: ", "40px Consolas", "#ffff00");
            this.scoreLabel.x = 400;
            game.addChild(this.scoreLabel);

        }

        public update(): void {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }
} 