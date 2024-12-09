import { Direction } from "./Direction.ts";

export class RightDirection implements Direction {
  print(): string {
    return ">";
  }
}