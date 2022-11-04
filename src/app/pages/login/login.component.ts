import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private sessionService: SessionService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      'nom': new FormControl(null, []),
      'pwd': new FormControl(null, [])
    });
  }

  login() {
    this.sessionService.login(this.loginForm.get('nom')?.value).then(() => {
      this.router.navigate(['/home']);
    });
  }

}
