var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var Road = (function (_super) {
        __extends(Road, _super);
        // CONSTRUCTOR
        function Road() {
            _super.call(this, assetLoader.getResult("road"));
            // PUBLIC INSTANCE VARIABLES
            this._dy = 5;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Road.prototype.update = function () {
            this.y += this._dy;
            this.chechBounds();
        };
        // Reset position of fuel to the top
        Road.prototype.reset = function () {
            this.y = -960;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Road.prototype.chechBounds = function () {
            // check if fuel has left from the bottom of the screen
            if (this.y === 0) {
                this.reset();
            }
        };
        return Road;
    })(createjs.Bitmap);
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map