export interface RaceFactor {
  factor: number,
  min: number,
  classes: {
    [key: number]: number
  }
}

export interface Factor {
  factor: number,
    constant: number,
    progFactor: number,
    BA: RaceFactor,
    HE: RaceFactor,
    WE: RaceFactor
}

export interface Factors {
  hp: Factor,
  mp: Factor,
  sp: Factor
}