import { CartesianCoordinateSystem } from "../models/CartesianCoordinateSystem.ts";
import { Counter } from "./Counter.ts";

export class DownToUpColumnXmasWordCounter implements Counter {
  constructor(private coordinates: CartesianCoordinateSystem) { }
  count(): number {
    let occurances = 0;
    for (const row of this.coordinates.getColumns()) {
        occurances += row.count("SAMX");
    }
    return occurances;
  }
}
