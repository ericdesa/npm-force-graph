
export class Coordinates {

    constructor(public x: number = 0, public y: number = 0) { }

    public distance(coordinates: Coordinates): number {
        let dx = coordinates.x - this.x;
        let dy = coordinates.y - this.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        return dist;
    }

}
