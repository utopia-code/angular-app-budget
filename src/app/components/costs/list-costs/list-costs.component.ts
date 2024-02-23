import { Component, OnDestroy, OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-list-costs',
  templateUrl: './list-costs.component.html',
  styleUrl: './list-costs.component.css'
})
export class ListCostsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  budget: number;
  rest: number;
  listCosts: any[] = [];

  constructor( private _budgetService: BudgetService){
    this.budget = 0;
    this.rest = 0;
    this.subscription = this._budgetService.getCosts().subscribe(data => {
      console.log(data);
      this.rest = this.rest - data.amount;
      this.listCosts.push(data);
    })
  }

  ngOnInit(): void {
    this.budget = this._budgetService.budget;
    this.rest = this._budgetService.rest;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  applyColorRest() {
    if(this.budget / 4 > this.rest) {
      return 'alert alert-danger';
    } else if ( this.budget / 2 > this.rest) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }
}