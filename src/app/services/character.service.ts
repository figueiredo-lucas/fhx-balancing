import { Injectable } from '@angular/core';
import { Race } from '../models/race';
import { Class } from '../models/class';

import { RACES } from '../models/data/races';
import { CLASSES } from '../models/data/classes';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor() { }

  getRaces(): Race[] {
    return RACES;
  }

  getClasses(): Class[] {
    return CLASSES;
  }
}
