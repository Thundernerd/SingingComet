var Entity = (function () {
    function Entity(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.Position = new Vector2(x, y);
    }
    Entity.prototype.Update = function () {
    };
    Entity.prototype.Draw = function (ctx) {
    };
    return Entity;
})();
//# sourceMappingURL=Entity.js.map