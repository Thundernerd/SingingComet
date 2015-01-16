window.onload = function () {
    var cv = document.getElementById('c');
    var ctx = cv.getContext("2d");
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    cv.width = WIDTH;
    cv.height = HEIGHT;
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(10, 10, 10, 10);
};
//# sourceMappingURL=app.js.map