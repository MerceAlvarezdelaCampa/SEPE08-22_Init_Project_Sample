import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vacanca } from 'src/app/models/vacanca.model';

@Component({
  selector: 'app-vacanca-card',
  templateUrl: './vacanca-card.component.html',
  styleUrls: ['./vacanca-card.component.scss']
})
export class VacancaCardComponent implements OnInit {

  @Input() vacanca: Vacanca | null;
  @Output() onButtonClicked: EventEmitter<Vacanca> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  clicked() {
    this.onButtonClicked.emit(this.vacanca!);
  }

}
