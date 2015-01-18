class Planet extends Entity {
    Radius: number;
    Color: string;
    
    Mass: number;    

    Acceleration: Vector2;
    Velocity: Vector2;
    

    constructor(x, y, radius, color) {
        super(x, y);               

        this.Radius = radius;
        this.Color = color;
        
        this.Mass = radius;

        this.Acceleration = new Vector2();
        this.Velocity = new Vector2();
    }

    ApplyForce(force: Vector2) {
        var f = force.Scaled(1 / this.Mass);
        this.Acceleration.Add(f);
    }

    Attract(other: Planet) {
        //var force = other.Position.Subtracted(this.Position);
        var force = this.Position.Subtracted(other.Position);
        var distance = force.Magnitude();
        if (distance < 5) distance = 5;
        if (distance > 25) distance = 25;
        

        //Maybe constrain distance

        force.Normalize();
        var strength = (0.4 * this.Mass * other.Mass) / (distance * distance);
        force.Scale(strength);

        other.Acceleration.Add(force);
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