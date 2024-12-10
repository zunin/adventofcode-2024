import { Coordinate } from "../Coordinate.ts";
import { Direction } from "./Direction.ts";
import { RightDirection } from "./RightDirection.ts";

export class UpDirection implements Direction {
  turn(): Direction {
    return new RightDirection();
}
  getNext(coordinate: Coordinate): Coordinate {
    return new Coordinate(
        coordinate.getX(),
        coordinate.getY() - 1
      );  }
  print(): string {
    return "^";
  }
}