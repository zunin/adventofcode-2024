import { Coordinate } from "../Coordinate.ts";
import { Direction } from "../Directions/Direction.ts";
import { GuardMap } from "../GuardMap.ts";
import { Tile } from "./Tile.ts";
import { distinctBy } from "@std/collections"
 
export class GuardTile implements Tile {
  pathLog: Array<Coordinate> = [];
  hasLeftMappedArea: boolean;

  getDistinctPositions(): number {
    return distinctBy(this.pathLog, (coordinate) => `${coordinate.getY()},${coordinate.getX()}`).length
  }
  constructor(private coordinate: Coordinate, private direction: Direction) {
    this.pathLog.push(coordinate);
    this.hasLeftMappedArea = false;
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

  hasLeftArea(): boolean {
    return this.hasLeftMappedArea;
  }

  step(guardMap: GuardMap) {
    const next = this.direction.getNext(this.coordinate);
    const otherTile = guardMap.getTile(next);
    if (otherTile === undefined) {
        this.hasLeftMappedArea = true;
    } else if (otherTile.canMoveTo()) {
        otherTile.moveTo(this.coordinate);
        this.moveTo(next);
    } else {
        this.direction = this.direction.turn();
    }
  }
}
