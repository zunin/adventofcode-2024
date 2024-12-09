import { Direction } from "./Direction.ts";

export class DownDirection implements Direction {
  print(): string {
   return "V";
  }
}