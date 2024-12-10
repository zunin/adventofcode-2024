import { Coordinate } from "./Coordinate.ts";
import { Tile } from "./Tiles/Tile.ts";

export class CartesianCoordinateSystem {
    
    constructor(private lines: Array<Array<Tile>>) {

    }

    private EnsureMapRow(coordinate: Coordinate, map: Map<number, Map<number, Tile>>) {
        if (!map.has(coordinate.getY())) {
            map.set(coordinate.getY(), new Map<number,Tile>());
        }
    }


    getMap(): Map<number, Map<number, Tile>> {
        const map = new Map<number, Map<number, Tile>>();


        for(const row of this.lines) {
            for(const tile of row) {
                const coordinate = tile.getPosition();
                this.EnsureMapRow(coordinate, map)
                const rowMap = map.get(coordinate.getY())!;
                rowMap.set(coordinate.getX(), tile);
                map.set(coordinate.getY(), new Map([...rowMap.entries()].sort()))
            }
            
        }

        return new Map([...map.entries()].sort());
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


    get(coordinate: Coordinate): Tile {
        return this.lines[coordinate.getY()][coordinate.getX()];
    }
}