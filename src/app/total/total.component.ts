import { Component } from '@angular/core';
import { CarboComponent } from '../carbo/carbo.component';


@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  carbo: number = 0
  calories: number = 0
  protein: number = 0
  }
