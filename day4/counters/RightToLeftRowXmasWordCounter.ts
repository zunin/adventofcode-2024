import { CartesianCoordinateSystem } from "../models/CartesianCoordinateSystem.ts";
import { Counter } from "./Counter.ts";

export class RightToLeftRowXmasWordCounter implements Counter {
  constructor(private coordinates: CartesianCoordinateSystem) {}
  count(): number {
    let occurances = 0;
    for (const row of this.coordinates.getRows()) {
      occurances += row.count("SAMX");
    }
    return occurances;
  }
}
