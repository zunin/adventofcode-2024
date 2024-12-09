import { Coordinate } from "../Coordinate.ts";
import { Direction } from "../Directions/Direction.ts";
import { Tile } from "./Tile.ts";

export class GuardTile implements Tile {
    getDistinctPositions(): number {
        return 0;
    }
    constructor(private coordinate: Coordinate, private direction: Direction) {}
    print(): string {
      return this.direction.print();
    }
    isGuard(): boolean {
        return true;
    }
}