window.onload = () => {
    var cv = <HTMLCanvasElement> document.getElementById('c');
    var ctx: CanvasRenderingContext2D = cv.getContext("2d");

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    cv.width = WIDTH;
    cv.height = HEIGHT;

    var start = new Date();
    var last = new Date();

    var dt: number;
    var totalSeconds: number;

    function tick() {
        var now = new Date();
        
        dt = (now.getTime() - last.getTime()) / 1000;
        totalSeconds = (now.getTime() - start.getTime()) / 1000;
        last = now;
        
        //Tick all objects
    }

    window.setInterval(tick, 1000 / 60);
};