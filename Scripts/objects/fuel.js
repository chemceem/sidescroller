var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // FUEL CLASS
    var Fuel = (function (_super) {
        __extends(Fuel, _super);
        // CONSTRUCTOR
        function Fuel() {
            _super.call(this, "island");
            this.sound = "yay";
            this._dy = 5;
            this.reset();
        }
        Fuel.prototype.update = function () {
            this.y += this._dy;
            this.checkBounds();
        };
        // Reset position of fuel to the top
        Fuel.prototype.reset = function () {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
        };
        Fuel.prototype.checkBounds = function () {
            // check if fuel has left the bottom of the screen
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
        };
        return Fuel;
    })(objects.GameObject);
    objects.Fuel = Fuel;
})(objects || (objects = {}));
//# sourceMappingURL=fuel.js.map