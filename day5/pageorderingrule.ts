export class PageOrderingRule {
  verify(before: number[], current: number, after: number[]): boolean {
    if (current === this.left && before.concat(after).some(update => update === this.right)) {
        return after.some(update => update === this.right);
    } else if (current === this.right && before.concat(after).some(update => update === this.left)) {
        return before.some(update => update === this.left);
    }
    
    // if ordering rules involving missing page numbers, they are ignored.
    return true;
  }
  constructor(private left: number, private right: number) {}
}
