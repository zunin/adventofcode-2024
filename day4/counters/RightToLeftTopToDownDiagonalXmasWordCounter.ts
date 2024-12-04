import { CartesianCoordinateSystem } from "../models/CartesianCoordinateSystem.ts";
import { Counter } from "./Counter.ts";

export class RightToLeftTopToDownDiagonalXmasWordCounter implements Counter {
  constructor(private coordinates: CartesianCoordinateSystem) { }
  count(): number {
    let occurances = 0;
    for(let y = 0; y < this.coordinates.getRows().length; y++) {
      let line = "";
      for(let x = 0; x < this.coordinates.getColumns().length; x++) {
        line += this.coordinates.get(x, y)

        if (this.coordinates.get(x, y) === "X") {
          if (this.coordinates.get(x-1, y+1) === "M") {
            if (this.coordinates.get(x-2, y+2) === "A") {
              if (this.coordinates.get(x-3, y+3) === "S") {
                occurances += 1;
              }
            }
          }
        }
      }
    }
    return occurances;
  }
}
