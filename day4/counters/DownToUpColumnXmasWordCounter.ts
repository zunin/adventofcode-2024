import { CartesianCoordinateSystem } from "../models/CartesianCoordinateSystem.ts";
import { Counter } from "./Counter.ts";

export class DownToUpColumnXmasWordCounter implements Counter {
  constructor(private coordinates: CartesianCoordinateSystem) { }
  count(): number {
    let occurances = 0;
    for (const row of this.coordinates.getColumns()) {
      if (row.contains("SAMX")) {
        occurances += 1;
      }
    }
    return occurances;
  }
}
