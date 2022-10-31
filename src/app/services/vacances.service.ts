import { Injectable } from '@angular/core';
import { Vacanca } from '../models/vacanca.model';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  vacances: Vacanca[] = [];

  constructor() {
    this.vacances = sessionStorage.getItem('vacances') ? JSON.parse(sessionStorage.getItem('vacances')!) : [];
  }

  addVacanca(vacanca: Vacanca): void {
    console.log('Vacanca: ', vacanca);
    this.vacances.push(vacanca);
    sessionStorage.setItem('vacances', JSON.stringify(this.vacances));
  }

  editVacanca(vacanca: Vacanca) {

  }

  removeVacanca(id: number) {

  }

  getVacancaById(id: number) {

  }

  getVacances() {
    return this.vacances;
  }

}
