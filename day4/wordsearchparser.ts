import { CartesianCoordinateSystem } from "./models/CartesianCoordinateSystem.ts";

export class WordSearchParser {
  private coordinates: CartesianCoordinateSystem;
  constructor(input: string) {
    this.coordinates = new CartesianCoordinateSystem(
      this.splitLines(input).map(x => x.trim()).filter(x => !!x),
    );
  }

  private splitLines(input: string): string[] {
    return input.split(/\r?\n|\r|\n/g);
  }

  public getCoordinates(): CartesianCoordinateSystem {
    return this.coordinates;
  }
}
