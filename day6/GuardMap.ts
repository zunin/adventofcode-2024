import { CartesianCoordinateSystem } from "./CartesianCoordinateSystem..ts";
import { GuardTile } from "./Tiles/GuardTile.ts";

export class GuardMap {
    guard: GuardTile | undefined;
    getGuard(): GuardTile {
        return this.guard!;
    }
    constructor(private coordinateSystem: CartesianCoordinateSystem) {

        for(const {tile} of this.coordinateSystem.iterXY()) {
            if (tile.isGuard()) {
                this.guard = tile as GuardTile;
            }
        }
    }

    print(): string {
        return [...this.coordinateSystem.iterXY()].reduce((stringMap, {coordinate, tile}, index) => {
            if(coordinate.getX() === 0 && coordinate.getY() !== 0) {
                stringMap += "\n";
            }
            return stringMap + tile.print();
        }, "");
    }

    step() {

    }
}
