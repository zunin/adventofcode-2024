import { Coordinate } from "../Coordinate.ts";

export interface Direction {
    getNext(coordinate: Coordinate): Coordinate;
    print(): string;
}