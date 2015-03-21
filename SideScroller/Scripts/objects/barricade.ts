module objects {
    // BARRICADE CLASS
    export class Barricade extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("cloud");
            this.sound = "crash";
            this.reset();
        }

        public update() {
            this.y += this._dy;
            this.x += this._dx;
            this.checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
        }

        private checkBounds() {
            // check if island has left the bottom of the screen
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
        }

    }

}  