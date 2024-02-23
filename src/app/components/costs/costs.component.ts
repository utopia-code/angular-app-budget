import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrl: './costs.component.css'
})
export class CostsComponent {

  constructor(private _budgetService: BudgetService,
              private router: Router) {
  }

   ngOnInit() {

    if(this._budgetService.budget === 0) {
      this.router.navigate(['/add-budget'])
    }

    console.log(this._budgetService)
   }
}