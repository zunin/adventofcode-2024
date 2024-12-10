import { MapParser } from "./MapParser.ts";

const input = await Deno.readTextFile("input.txt");
const mapParser = new MapParser(input);
const map = mapParser.getMap();
map.stepUntilGuardLeavesArea();

const distinctPositions = map.getGuard().getDistinctPositions()

console.log(`The guard visits ${distinctPositions} distinct positions before leaving the mapped area`)
