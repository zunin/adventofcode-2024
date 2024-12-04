export class Column {
  constructor(private column: string) { }

  get(x: number): string {
    return this.column[x];
  }

  contains(input: string): boolean {
    return this.column.includes(input);
  }
}
