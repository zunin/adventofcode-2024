export class Pair {
    constructor(public left: number, public right:  number) {

    }

    distance(): number {
        return Math.max(this.left, this.right) - Math.min(this.left, this.right);
    }
}