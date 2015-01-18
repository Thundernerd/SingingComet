class Planet extends Entity {
    Radius: number;
    Color: string;    

    constructor(x, y, radius, color) {
        super(x, y);               

        this.Radius = radius;
        this.Color = color;
    }

    Update(dt: number) {
        super.Update(dt);        
    }

    Draw(ctx: CanvasRenderingContext2D) {        
        FillCircle(ctx, this.Position, this.Radius, this.Color);
    }
}