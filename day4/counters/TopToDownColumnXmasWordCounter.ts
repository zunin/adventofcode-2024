import { CartesianCoordinateSystem } from "../models/CartesianCoordinateSystem.ts";
import { Counter } from "./Counter.ts";

export class TopToDownColumnXmasWordCounter implements Counter {
  constructor(private coordinates: CartesianCoordinateSystem) { }
  count(): number {
    let occurances = 0;
    for (const row of this.coordinates.getColumns()) {
      if (row.contains("XMAS")) {
        occurances += 1;
      }
    }
    return occurances;
  }
}
