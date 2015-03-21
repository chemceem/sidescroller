var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // PLANE CLASS
    var Car = (function (_super) {
        __extends(Car, _super);
        // CONSTRUCTOR
        function Car() {
            _super.call(this, assetLoader.getResult("car"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.y = 430;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            var sound = createjs.Sound.play("engine", { loop: -1 });
            sound.volume = 0.05;
        }
        // PUBLIC METHODS
        Car.prototype.update = function () {
            this.x = stage.mouseX;
        };
        return Car;
    })(createjs.Bitmap);
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=car.js.map