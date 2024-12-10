import { Coordinate } from "../Coordinate.ts";
import { Direction } from "../Directions/Direction.ts";
import { GuardMap } from "../GuardMap.ts";
import { Tile } from "./Tile.ts";

export class GuardTile implements Tile {
  pathLog: Array<Coordinate> = [];
  getDistinctPositions(): number {
    return 0;
  }
  constructor(private coordinate: Coordinate, private direction: Direction) {
    this.pathLog.push(coordinate);
  }
  getPosition(): Coordinate {
    return this.coordinate;
}
  moveTo(coordinate: Coordinate): void {
    this.pathLog.push(coordinate);
    this.coordinate = coordinate;
  }
  canMoveTo(): boolean {
    return false;
  }
  print(): string {
    return this.direction.print();
  }
  isGuard(): boolean {
    return true;
  }

  step(guardMap: GuardMap) {

    const next = this.direction.getNext(this.coordinate);
    const otherTile = guardMap.getTile(next);

    if (otherTile.canMoveTo()) {
        otherTile.moveTo(this.coordinate);
        this.moveTo(next);
    }
  }
}
