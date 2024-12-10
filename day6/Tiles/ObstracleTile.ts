import { Coordinate } from "../Coordinate.ts";
import { Tile } from "./Tile.ts";

export class ObstracleTile implements Tile {
  constructor(private coordinate: Coordinate) {}
  getPosition(): Coordinate {
    return this.coordinate;
  }
  moveTo(coordinate: Coordinate): void {
    this.coordinate = coordinate;
  }
  canMoveTo(): boolean {
    return false;
  }
  print(): string {
    return "#";
  }
  isGuard(): boolean {
    return false;
  }
}
