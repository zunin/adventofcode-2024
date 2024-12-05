import { CartesianCoordinateSystem } from "../models/CartesianCoordinateSystem.ts";
import { Counter } from "./Counter.ts";

export class CrossMasCounter implements Counter {
  constructor(private coordinates: CartesianCoordinateSystem) { }
  count(): number {
    let occurances = 0;
    for(let y = 0; y < this.coordinates.getRows().length; y++) {
      for(let x = 0; x < this.coordinates.getColumns().length; x++) {
        const firstDiagonalHit = ["SAM", "MAS"].some(hit => hit == [
          this.coordinates.get(x, y),
          this.coordinates.get(x+1, y+1),
          this.coordinates.get(x+2, y+2),
        ].join(''));
        const secondDiagonalHit = ["SAM", "MAS"].some(hit => hit == [
          this.coordinates.get(x+2, y),
          this.coordinates.get(x+1, y+1),
          this.coordinates.get(x, y+2),
        ].join(''));

        
        if (firstDiagonalHit && secondDiagonalHit) {
          occurances += 1;
        }
      }
    }

    return occurances;
  }
}
