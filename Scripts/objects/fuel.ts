module objects {
    // FUEL CLASS
    export class Fuel extends objects.GameObject{

        // CONSTRUCTOR
        constructor() {
            super("island");
            this.sound = "yay";
            this._dy = 5;
            this.reset();
        }

        public update() {
            this.y += this._dy;
            this.checkBounds();
        }

        // Reset position of fuel to the top
        public reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
        }

        private checkBounds() {
            // check if fuel has left the bottom of the screen
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
        }

    }

} 