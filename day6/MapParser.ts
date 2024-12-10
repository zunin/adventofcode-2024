import { CartesianCoordinateSystem } from "./CartesianCoordinateSystem.ts";
import { Coordinate } from "./Coordinate.ts";
import { DownDirection } from "./Directions/DownDirection.ts";
import { RightDirection } from "./Directions/RightDirection.ts";
import { UpDirection } from "./Directions/UpDirection.ts";
import { GuardMap } from "./GuardMap.ts";
import { EmptyTile } from "./Tiles/EmptyTile.ts";
import { GuardTile } from "./Tiles/GuardTile.ts";
import { ObstracleTile } from "./Tiles/ObstracleTile.ts";
import { Tile } from "./Tiles/Tile.ts";

export class MapParser {
  private map: GuardMap;
  constructor(input: string) {
    const tiles = this.splitLines(input).filter(x => !!x)
      .map((line, y) => this.parseLine(line, y));
    this.map = new GuardMap(new CartesianCoordinateSystem(tiles));
  }

  private parseLine(input: string, y: number): Array<Tile> {
    return input.split("").map((char, x) =>
      this.parseCoordinate(char, new Coordinate(x, y))
    );
  }

  private parseGuardDirection(inputDirection: string) {
    if (inputDirection === "^") {
      return new UpDirection();
    }
    if (inputDirection === "V") {
      return new DownDirection();
    }
    if (inputDirection === "<") {
      return new RightDirection();
    }
    if (inputDirection === "V") {
      return new DownDirection();
    }
    throw new Error(`Unkonwn parse direction error '${inputDirection}'`);
  }

  private parseCoordinate(input: string, coordinate: Coordinate): Tile {
    if (["^", "V", ">", "<"].some((guard) => guard === input)) {
      return new GuardTile(coordinate, this.parseGuardDirection(input));
    }
    if (input === "#") {
      return new ObstracleTile(coordinate);
    }
    if (input === ".") {
      return new EmptyTile(coordinate);
    }
    throw new Error(`Unkonwn parse error '${input}' at ${coordinate} `);
  }

  private splitLines(input: string): string[] {
    return input.split(/\r?\n|\r|\n/g);
  }

  getMap(): GuardMap {
    return this.map;
  }
}
