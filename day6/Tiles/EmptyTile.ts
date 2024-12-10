import { Coordinate } from "../Coordinate.ts";
import { Tile } from "./Tile.ts";

export class EmptyTile implements Tile {
  constructor(private coordinate: Coordinate) {}
  getPosition(): Coordinate {
    return this.coordinate;
}
  moveTo(coordinate: Coordinate): void {
    this.coordinate = coordinate;
}
  canMoveTo(): boolean {
    return true;
  }
  isGuard(): boolean {
    return false;
  }

  print(): string {
    return "."
  }
}
