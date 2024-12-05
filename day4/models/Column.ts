export class Column {
  constructor(private column: string) { }

  get(x: number): string {
    return this.column[x];
  }

  count(input: string): number {
    let occurances = 0;
    for (let x= 0; x < this.column.length; x++) {
      if(this.column.slice(x, x+input.length) === input) {
        occurances += 1;
      }
    }
    return occurances
  }
}
