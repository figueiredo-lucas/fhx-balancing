import { Class } from './class';
import { Item } from './item';
import { Race } from './race';

export interface Character {
  race: Race,
  class: Class,
  vit: number,
  int: number,
  str: number,
  dex: number,
  level: number,
  gender: number,
  hp?: number,
  mp?: number,
  sp?: number,
  meleeDmg?: { min: number, max: number },
  rangedDmg?: { min: number, max: number },
  magicDmg?: { min: number, max: number },
  equippedItems: Item[]
}