var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.X = x;
        this.Y = y;
    }
    Vector2.prototype.Distance = function (other) {
        var x = other.X - this.X;
        var y = other.Y - this.Y;
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    };
    Vector2.prototype.DistanceSquared = function (other) {
        var x = other.X - this.X;
        var y = other.Y - this.Y;
        return Math.pow(x, 2) + Math.pow(y, 2);
    };
    Vector2.prototype.Magnitude = function () {
        return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2));
    };
    Vector2.prototype.MagnitudeSquared = function () {
        return Math.pow(this.X, 2) + Math.pow(this.Y, 2);
    };
    Vector2.prototype.Normalize = function () {
        var mag = this.Magnitude();
        this.X = this.X / mag;
        this.Y = this.Y / mag;
    };
    Vector2.prototype.Normalized = function () {
        var newVec = new Vector2(this.X, this.Y);
        newVec.Normalize();
        return newVec;
    };
    Vector2.prototype.Add = function (other) {
        this.X += other.X;
        this.Y += other.Y;
    };
    Vector2.prototype.Added = function (other) {
        return new Vector2(this.X + other.X, this.Y + other.Y);
    };
    Vector2.prototype.Subtract = function (other) {
        this.X -= other.X;
        this.Y -= other.Y;
    };
    Vector2.prototype.Subtracted = function (other) {
        return new Vector2(this.X - other.X, this.Y - other.Y);
    };
    Vector2.prototype.Scale = function (value) {
        this.X *= value;
        this.Y *= value;
    };
    Vector2.prototype.Scaled = function (value) {
        return new Vector2(this.X * value, this.Y * value);
    };
    return Vector2;
})();
//# sourceMappingURL=Vector2.js.map