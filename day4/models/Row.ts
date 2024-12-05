export class Row {
  constructor(private row: string) { }

  get(y: number): string {
    return this.row[y];
  }

  count(input: string): number {
    let occurances = 0;
    for (let y = 0; y < this.row.length; y++) {
      if(this.row.slice(y, y+input.length) === input) {
        occurances += 1;
      }
    }
    return occurances
  }
}
