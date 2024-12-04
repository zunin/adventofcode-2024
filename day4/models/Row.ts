export class Row {
  constructor(private row: string) { }

  get(y: number): string {
    return this.row[y];
  }

  contains(input: string): boolean {
    return this.row.includes(input);
  }
}
