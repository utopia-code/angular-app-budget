import { Component } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';

@Component({
  selector: 'app-add-cost',
  templateUrl: './add-cost.component.html',
  styleUrl: './add-cost.component.css'
})
export class AddCostComponent {

  nameCost: string;
  amount: number;
  formError: boolean;
  textError: string;

  constructor(private _budgetService: BudgetService) {
    this.nameCost = '';
    this.amount = 0;
    this.formError = false;
    this.textError = '';
  }

  addCost() {
    if (this.amount > this._budgetService.rest) {
      this.formError = true;
      this.textError = 'This amount is greater then the budget';
      return;
    }


    if (this.nameCost === '' || this.amount <= 0) {
      this.formError = true;
      this.textError = 'Error in cost or amount';
    } else {

      const COST = {
        name: this.nameCost,
        amount: this.amount
      }

      this._budgetService.addCost(COST);

      this.formError = false;
      this.nameCost = '';
      this.amount = 0;
    }
  }
}