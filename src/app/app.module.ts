import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { CostsComponent } from './components/costs/costs.component';
import { AddCostComponent } from './components/costs/add-cost/add-cost.component';
import { ListCostsComponent } from './components/costs/list-costs/list-costs.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBudgetComponent,
    CostsComponent,
    AddCostComponent,
    ListCostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
