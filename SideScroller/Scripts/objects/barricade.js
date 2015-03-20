var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Barricade = (function (_super) {
        __extends(Barricade, _super);
        // CONSTRUCTOR
        function Barricade() {
            _super.call(this, "cloud");
            this.sound = "thunder";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Barricade.prototype.update = function () {
            this.y += this._dy;
            this.x += this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Barricade.prototype.reset = function () {
            this.y = -this.height;
            this.x = Math.floor(Math.random() * 640);
            this._dy = Math.floor(Math.random() * 5) + 5;
            this._dx = Math.floor(Math.random() * 4) - 2;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Barricade.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.y >= (480 + this.height)) {
                this.reset();
            }
        };
        return Barricade;
    })(objects.GameObject);
    objects.Barricade = Barricade;
})(objects || (objects = {}));
//# sourceMappingURL=barricade.js.map