import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancaCardComponent } from './components/vacanca-card/vacanca-card.component';

@NgModule({
  declarations: [
    VacancaCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VacancaCardComponent
  ]
})
export class SharedModule { }
