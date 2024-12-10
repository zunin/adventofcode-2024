import { Coordinate } from "../Coordinate.ts";
import { Direction } from "./Direction.ts";

export class LeftDirection implements Direction {
  getNext(coordinate: Coordinate): Coordinate {
    return new Coordinate(
      coordinate.getX() - 1,
      coordinate.getY(),
    );
  }
  print(): string {
    return "<";
  }
}
