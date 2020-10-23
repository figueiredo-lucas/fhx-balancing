import { Race } from "../race";
import { CLASSES } from './classes';

export const RACES: Race[] = [{
  id: 1,
  abbr: 'BA',
  name: 'Barbarian',
  classes: CLASSES.filter(c => [0, 1, 2, 4].includes(c.id)),
  vit: 11,
  int: 7,
  str: 11,
  dex: 9,
  meleeResist: 5,
  magicResist: 0,
  rangedResist: 5,
  curseResist: 10
},
{
  id: 2,
  abbr: 'HE',
  name: 'High Elf',
  classes: CLASSES.filter(c => [2, 5, 7, 9].includes(c.id)),
  vit: 7,
  int: 13,
  str: 7,
  dex: 11,
  meleeResist: 0,
  magicResist: 5,
  rangedResist: 5,
  curseResist: 20
},
{
  id: 1,
  abbr: 'WE',
  name: 'Wood Elf',
  classes: CLASSES.filter(c => [0, 2, 5, 9].includes(c.id)),
  vit: 8,
  int: 11,
  str: 7,
  dex: 12,
  meleeResist: 0,
  magicResist: 0,
  rangedResist: 5,
  curseResist: 15
}];