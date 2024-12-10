import { Coordinate } from "../Coordinate.ts";
import { Direction } from "./Direction.ts";
import { DownDirection } from "./DownDirection.ts";

export class RightDirection implements Direction {
  turn(): Direction {
    return new DownDirection();
  }
  getNext(coordinate: Coordinate): Coordinate {
    return new Coordinate(
      coordinate.getX() + 1,
      coordinate.getY(),
    );
  }
  print(): string {
    return ">";
  }
}
