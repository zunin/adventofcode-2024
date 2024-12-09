import { Direction } from "./Direction.ts";

export class UpDirection implements Direction {
  print(): string {
    return "^";
  }
}