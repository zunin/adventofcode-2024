import { ColumnParser } from "./columnparser.ts";
import { ColumnsPairer } from "./columnspairer.ts";
import { PairDistanceSummizer } from "./pairdistancesummizer.ts";

const input = await Deno.readTextFile("input.txt");
const parser = new ColumnParser(input);
const pairer = new ColumnsPairer(parser.getColumns());
const pairs = pairer.pairSmallest();
const totalDistance = new PairDistanceSummizer(pairs).totalSum();

console.log(`What is the total distance between the lists is ${totalDistance}`)