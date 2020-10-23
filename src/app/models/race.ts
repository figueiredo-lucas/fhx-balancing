import { Class } from './class';

export interface Race {
  id: number,
  abbr: string,
  name: string,
  classes: Class[],
  vit: number,
  int: number,
  str: number,
  dex: number,
  meleeResist: number,
  magicResist: number,
  rangedResist: number,
  curseResist: number
}