import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vacanca } from 'src/app/models/vacanca.model';
import { VacancesService } from 'src/app/services/vacances.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  stateObject = {
    submitted: false,
    hasErrors: true
  }

  newForm: FormGroup;

  constructor(private vacancesService: VacancesService,
    private router: Router) { }

  ngOnInit(): void {
    this.newForm = new FormGroup({
      'nom': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'preu': new FormControl(null, [Validators.required]),
      'pais': new FormControl(null, []),
      'descripcio': new FormControl(null, [])
    });
  }

  addVacanca() {
    this.stateObject.submitted = true;
    if (this.newForm.valid) {
      const v: Vacanca = {} as unknown as Vacanca;
      v.id = 0;
      v.nom = this.newForm.get('nom')?.value;
      v.descripcio = this.newForm.get('descripcio')?.value;
      v.pais = this.newForm.get('pais')?.value;
      v.preu = this.newForm.get('preu')?.value;
      this.vacancesService.addVacanca(v);
      this.stateObject.submitted = false;
      this.router.navigate(['/home']);
    }
  }

}
