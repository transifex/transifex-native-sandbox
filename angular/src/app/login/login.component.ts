import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { T, TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  invalidCredentials = false;

  // Translations using decorator
  @T('Monday', { _key: 'text.monday' })
  weekday: string;
  @T('terms of service', { _key: 'text.terms_of_service' })
  terms: string;
  @T('privacy policy', { _key: 'text.privacy_policy' })
  privacy: string;

  constructor(private translationService: TranslationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    if (this.form.controls['username'].value !== 'admin@demo.io' ||
      this.form.controls['password'].value !== '123') {
      this.invalidCredentials = true;
      return;
    } else {
      this.invalidCredentials = false;
      this.login();
    }
  }

  onLocaleChanged(event) {
  }

  login() {
    if (!this.form.invalid && !this.invalidCredentials) {
      this.router.navigateByUrl('home');
    }
  }
}
