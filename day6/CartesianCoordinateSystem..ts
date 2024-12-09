import { Coordinate } from "./Coordinate.ts";
import { Tile } from "./Tiles/Tile.ts";

export class CartesianCoordinateSystem {
    
    constructor(private lines: Array<Array<Tile>>) {

    }

    *iterXY(): Generator<{coordinate: Coordinate, tile: Tile}> {
        for (let y = 0; y < this.lines.length; y++) {
            const row = this.lines[y];
            for (let x = 0; x < this.lines.length; x++) {
                yield {
                    coordinate: new Coordinate(x, y), 
                    tile: row[x]
                };
            }
        }
    }
}