import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FACTORS } from '../models/data/factors';
import { Factors } from '../models/factors';

@Injectable({
  providedIn: 'root'
})
export class LiveFactorsService {

  private originalFactor: Factors = FACTORS;
  private liveFactor: Factors;
  private liveFactorSubject: BehaviorSubject<Factors>;

  constructor() {
    this.liveFactor = JSON.parse(JSON.stringify(this.originalFactor));
    this.liveFactorSubject = new BehaviorSubject<Factors>(this.liveFactor);
  }

  getLiveFactorObservable(): BehaviorSubject<Factors> {
    return this.liveFactorSubject;
  }

  getLiveFactor(): Factors {
    return this.liveFactor;
  }

  getOriginalFactor() {
    return this.originalFactor;
  }

  resetLiveFactor() {
    this.liveFactor = JSON.parse(JSON.stringify(this.originalFactor));
    this.liveFactorSubject.next(this.liveFactor);
  }

  updateLiveFactor(factors: Factors): void {
    this.liveFactor = factors;
    this.liveFactorSubject.next(factors);
  }
}
