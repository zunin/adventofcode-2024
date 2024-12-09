import { Coordinate } from "../Coordinate.ts";
import { Tile } from "./Tile.ts";

export class ObstracleTile implements Tile {
  constructor(private coordinate: Coordinate) {}
  print(): string {
    return "#";
  }
  isGuard(): boolean {
    return false;
  }
}
