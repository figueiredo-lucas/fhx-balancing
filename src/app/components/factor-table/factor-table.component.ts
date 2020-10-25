import { Component, Input, OnInit } from '@angular/core';
import { Factor } from 'src/app/models/factors';

@Component({
  selector: 'app-factor-table',
  templateUrl: './factor-table.component.html',
  styleUrls: ['./factor-table.component.scss']
})
export class FactorTableComponent implements OnInit {

  constructor() { }

  @Input()
  factor: Factor
  @Input()
  name: string

  ngOnInit(): void {
  }

}
