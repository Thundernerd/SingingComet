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
    var Planets: Array<Planet> = [];   
    var Attractors: Array<AttractorPlanet> = [];   

    Init();    
    
    var audioCtx = new AudioContext();

    var currentPlanet: Planet;
    function onMouseDown(event: MouseEvent) {
        currentPlanet = new Planet(event.pageX, event.pageY, 10, RandomRGB(), audioCtx);
        currentPlanet.Mass = 0;

        Entities.push(currentPlanet);
        Planets.push(currentPlanet);              
    }

    function onMouseUp(event: MouseEvent) {
        currentPlanet.Mass = currentPlanet.Radius;
        currentPlanet.Velocity = new Vector2(-5, 0);
        currentPlanet = null;
    }

    function Init() {
        var attractor = new AttractorPlanet(WIDTH / 2, HEIGHT / 2, 100, 'yellow');
        Entities.push(attractor);
        Attractors.push(attractor);    
    }

    function Tick() {
        var now = new Date();
        
        dt = (now.getTime() - last.getTime()) / 1000;
        totalSeconds = (now.getTime() - start.getTime()) / 1000;
        last = now;
        
        FillRectangle(ctx, new Vector2(), WIDTH, HEIGHT, 'rgba(0, 0, 0, 0.20)');

        if (currentPlanet != null) {
            currentPlanet.Radius += 50 * dt;            
        }
        
        for (var i = 0; i < Attractors.length; i++) {
            for (var j = 0; j < Planets.length; j++) {
                Attractors[i].Attract(Planets[j]);
            }
        }

        for (var i = 0; i < Entities.length; i++) {
            Entities[i].Update(dt);
            Entities[i].Draw(ctx);
        }
    }

    window.setInterval(Tick, 1000 / 60);
};