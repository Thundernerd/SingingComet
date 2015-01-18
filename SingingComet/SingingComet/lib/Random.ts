function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function RandomNumber(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function RandomRGB(alpha = 1) {
    var r = 255 * Math.random() | 0,
        g = 255 * Math.random() | 0,
        b = 255 * Math.random() | 0;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

function RandomRGBA() {
    var r = 255 * Math.random() | 0,
        g = 255 * Math.random() | 0,
        b = 255 * Math.random() | 0,
        a = 255 * Math.random() | 0;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}