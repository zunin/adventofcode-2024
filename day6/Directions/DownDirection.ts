import { Coordinate } from "../Coordinate.ts";
import { Direction } from "./Direction.ts";
import { LeftDirection } from "./LeftDirection.ts";

export class DownDirection implements Direction {
  turn(): Direction {
    return new LeftDirection();
  }
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