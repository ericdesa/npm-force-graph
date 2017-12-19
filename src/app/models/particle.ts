
import { Coordinates } from './coordinates';

export class Particle {

    public coordinate: Coordinates;
    public size: number;

    constructor() {

    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.coordinate.x, this.coordinate.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    public live() {

    }

}
