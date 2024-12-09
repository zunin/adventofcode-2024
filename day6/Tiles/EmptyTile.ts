import { Coordinate } from "../Coordinate.ts";
import { Tile } from "./Tile.ts";

export class EmptyTile implements Tile {
  constructor(private coordinate: Coordinate) {}
  isGuard(): boolean {
    return false;
  }

  print(): string {
    return "."
  }
}
