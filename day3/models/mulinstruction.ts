export class MulInstruction {
    constructor(private left: number, private right: number) {
        
    }

    multiply(): number {
        return this.left * this.right;
    }
}