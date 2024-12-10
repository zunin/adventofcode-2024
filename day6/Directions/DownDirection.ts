import { Coordinate } from "../Coordinate.ts";
import { Direction } from "./Direction.ts";

export class DownDirection implements Direction {
  getNext(coordinate: Coordinate): Coordinate {
    return new Coordinate(
      coordinate.getX(),
      coordinate.getY() + 1
    );
  }
  print(): string {
   return "V";
  }
}