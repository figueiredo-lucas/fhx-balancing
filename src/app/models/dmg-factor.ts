export interface StatsFactor {
  key: string,
  constant: number,
  factor: number
}

export interface TypedDmgFactor {
  constant: number,
  factor: number,
  stats: StatsFactor[]
}

export interface DmgFactor {
  expFactor: number,
  melee: TypedDmgFactor,
  ranged: TypedDmgFactor,
  magic: TypedDmgFactor
}