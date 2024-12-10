import { Coordinate } from "../Coordinate.ts";
import { Direction } from "./Direction.ts";
import { UpDirection } from "./UpDirection.ts";

export class LeftDirection implements Direction {
  turn(): Direction {
    return new UpDirection();
  }
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
