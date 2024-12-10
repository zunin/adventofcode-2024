import { Coordinate } from "../Coordinate.ts";

export interface Tile {
  isGuard(): boolean;
  getPosition(): Coordinate;
  moveTo(coordinate: Coordinate): void;
  canMoveTo(): boolean;
  print(): string;
}