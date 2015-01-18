class Planet extends Entity {
    Radius: number;
    Color: string;
    
    Mass: number;    

    Acceleration: Vector2;
    Velocity: Vector2;
    
    Sound: Voice;    

    constructor(x, y, radius, color, audioCtx) {
        super(x, y);               

        this.Radius = radius;
        this.Color = color;
        
        this.Mass = radius;

        this.Acceleration = new Vector2();
        this.Velocity = new Vector2();

        this.Sound = new Voice(audioCtx);
    }

    ApplyForce(force: Vector2) {       
        if (this.Mass == 0) return;
         
        var f = force.Divided(this.Mass);

        this.Acceleration.Add(f);
    }

    map_range(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }

    Attract(other: Planet) {        
        var force = this.Position.Subtracted(other.Position);
        var distance = force.Magnitude();
        var nonClippedDistance = distance;

        if (distance < 5) distance = 5;
        if (distance > 25) distance = 25;       

        force.Normalize();
        var strength = (0.4 * this.Mass * other.Mass) / (distance * distance);
        force.Scale(strength);

        other.ApplyForce(force);

        
        var freq = this.map_range(nonClippedDistance, 0, 900, 16, 7000);
        console.log(freq);
        this.Sound.Oscillator.frequency.value = freq;        
    }

    Update(dt: number) {
        super.Update(dt);  
        
        this.Velocity.Add(this.Acceleration);
        this.Position.Add(this.Velocity);
        this.Acceleration.Scale(0);        
                     
    }

    Draw(ctx: CanvasRenderingContext2D) {        
        FillCircle(ctx, this.Position, this.Radius, this.Color);
    }
}