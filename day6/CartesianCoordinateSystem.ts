import { Coordinate } from "./Coordinate.ts";
import { Tile } from "./Tiles/Tile.ts";

export class CartesianCoordinateSystem {
    private map = new Map<number, Map<number, Tile>>();

    constructor(lines: Array<Array<Tile>>) {
        for(const row of lines) {
            for(const tile of row) {
                const coordinate = tile.getPosition();
                this.EnsureMapRow(coordinate, this.map)
                const rowMap = this.map.get(coordinate.getY())!;
                rowMap.set(coordinate.getX(), tile);
                this.map.set(coordinate.getY(), new Map([...rowMap.entries()].sort()))
            }
            
        }
        this.map = new Map([...this.map.entries()].sort());
    }

    private EnsureMapRow(coordinate: Coordinate, map: Map<number, Map<number, Tile>>) {
        if (!map.has(coordinate.getY())) {
            map.set(coordinate.getY(), new Map<number,Tile>());
        }
    }


    getMap(): Map<number, Map<number, Tile>> {
        return this.map;
    }


    get(coordinate: Coordinate): Tile | undefined {
        return this.getMap().get(coordinate.getY())?.get(coordinate.getX());
    }
}