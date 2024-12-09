import { Direction } from "./Direction.ts";

export class LeftDirection implements Direction {
  print(): string {
    return "<";
  }
}