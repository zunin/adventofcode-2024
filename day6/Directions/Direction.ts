import { Coordinate } from "../Coordinate.ts";

export interface Direction {
    turn(): Direction;
    getNext(coordinate: Coordinate): Coordinate;
    print(): string;
}