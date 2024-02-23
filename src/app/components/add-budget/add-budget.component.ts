import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrl: './add-budget.component.css'
})
export class AddBudgetComponent implements OnInit {

  amount: number;
  amountError: boolean;

  constructor(private _budgetService: BudgetService,
              private router: Router) {
    this.amount = 0;
    this.amountError = false;
  }

  ngOnInit(): void {
    
  }

  addBudget() {
    if (this.amount > 0) {
        this.amountError = false;
        this._budgetService.budget = this.amount;
        this._budgetService.rest = this.amount;
        this.router.navigate(['/costs']);
    } else {
      this.amountError = true;
    }
  }
}
