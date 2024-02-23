import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { CostsComponent } from './components/costs/costs.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-budget', pathMatch: 'full' },
  { path: 'add-budget', component: AddBudgetComponent },
  { path: 'costs', component: CostsComponent },
  { path: '**', redirectTo: '/add-budget', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
