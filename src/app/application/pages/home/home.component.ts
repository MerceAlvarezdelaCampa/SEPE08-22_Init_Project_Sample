import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Vacanca } from 'src/app/models/vacanca.model';
import { VacancesService } from 'src/app/services/vacances.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  vacances: Vacanca[] = [];

  constructor(private vacancesService: VacancesService) { }

  ngOnInit(): void {
    this.vacances = this.vacancesService.getVacances();
  }

  showAlert(vacanca: Vacanca) {
    alert(vacanca.nom);
  }

}
