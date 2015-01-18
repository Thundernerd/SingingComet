window.onload = () => {
    var cv = <HTMLCanvasElement> document.getElementById('c');
    var ctx: CanvasRenderingContext2D = cv.getContext("2d");

    cv.addEventListener("mousedown", onMouseDown);
    cv.addEventListener("mouseup", onMouseUp);

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    cv.width = WIDTH;
    cv.height = HEIGHT;

    var start = new Date();
    var last = new Date();

    var dt: number;
    var totalSeconds: number;

    var Entities: Array<Entity> = [];    

    Init();

    function onMouseDown(event: MouseEvent) {
        Entities.push(new Planet(event.pageX, event.pageY, RandomInt(10, 30), RandomRGB()));        
    }

    function onMouseUp(event: MouseEvent) {

    }

    function Init() {
        Entities.push(new Planet(WIDTH / 2, HEIGHT / 2, 20, 'green'));
    }

    function Tick() {
        var now = new Date();
        
        dt = (now.getTime() - last.getTime()) / 1000;
        totalSeconds = (now.getTime() - start.getTime()) / 1000;
        last = now;
        
        FillRectangle(ctx, new Vector2(), WIDTH, HEIGHT, 'rgba(0, 0, 0, 0.30)');

        for (var i = 0; i < Entities.length; i++) {
            for (var j = 0; j < Entities.length; j++) {
                if (Entities[i] != Entities[j]) {
                    (<Planet>Entities[i]).Attract(<Planet>Entities[j]);
                }                
            }
        }

        for (var i = 0; i < Entities.length; i++) {
            Entities[i].Update(dt);
            Entities[i].Draw(ctx);
        }
    }

    window.setInterval(Tick, 1000 / 60);
};