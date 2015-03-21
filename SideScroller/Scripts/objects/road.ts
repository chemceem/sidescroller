module objects {
    // OCEAN CLASS
    export class Road extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        private _dy: number = 5;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("road"));
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y += this._dy;
            this.chechBounds();
        }

        // Reset position of fuel to the top
        public reset() {
            this.y = -960
            this.x = 0;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private chechBounds() {
            // check if fuel has left from the bottom of the screen
            if (this.y === 0) {
                this.reset();
            }
        }
    }
}