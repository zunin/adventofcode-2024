import { red } from "jsr:@std/internal@^1.0.5/styles";
import { CartesianCoordinateSystem } from "./CartesianCoordinateSystem..ts";
import { Coordinate } from "./Coordinate.ts";
import { GuardTile } from "./Tiles/GuardTile.ts";
import { Tile } from "./Tiles/Tile.ts";

export class GuardMap {
    guard!: GuardTile;
    getGuard(): GuardTile {
        return this.guard;
    }
    constructor(private coordinateSystem: CartesianCoordinateSystem) {

        for(const {tile} of this.coordinateSystem.iterXY()) {
            if (tile.isGuard()) {
                this.guard = tile as GuardTile;
            }
        }
    }

    print(): string {
        let mapString = "";
        for(const [y, row] of this.coordinateSystem.getMap()) {
            for(const [x, column] of row) {
                mapString += column.print();
            }
            mapString += "\n"
        }
        return mapString;
    }

    step() {
        this.guard.step(this);
    }

    getTile(coordinate: Coordinate): Tile {
        return this.coordinateSystem.get(coordinate);
    }
}
