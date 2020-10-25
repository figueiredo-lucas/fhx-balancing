import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Factors } from 'src/app/models/factors';
import { LiveFactorsService } from 'src/app/services/live-factors.service';

@Component({
  selector: 'app-stat-factor-modal',
  templateUrl: './stat-factor-modal.component.html',
  styleUrls: ['./stat-factor-modal.component.scss']
})
export class StatFactorModalComponent implements OnInit {

  constructor(private liveFactorsService: LiveFactorsService) { }

  factors: Factors;

  reset() {
    this.liveFactorsService.resetLiveFactor();
  }

  update() {
    this.liveFactorsService.updateLiveFactor(this.factors);
  }

  ngOnInit(): void {
    this.liveFactorsService.getLiveFactorObservable().subscribe((factors: Factors) => {
      this.factors = factors;
    })
  }

}
