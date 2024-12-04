import { Row } from "./Row.ts";
import { Column } from "./Column.ts";

export class CartesianCoordinateSystem {
  private rows: Array<Row>;
  private columns: Array<Column>;

  constructor(lines: Array<string>) {
    this.rows = lines.map((line) => new Row(line));

    this.columns = [];

    const lineLength = Math.max(...lines.map((x) => x.length));
    for (let x = 0; x < lineLength; x++) {
      let column = "";
      for (let y = 0; y < lines.length; y++) {
        column += lines[y][x];
      }
      this.columns.push(new Column(column));
    }
  }
  public get(x: number, y: number): string | undefined{
    return this.rows[y]?.get(x) ?? undefined;
  }

  public getRows(): Array<Row> {
    return this.rows;
  }

  public getColumns(): Array<Column> {
    return this.columns;
  }
}
