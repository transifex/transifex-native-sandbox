import { Component, OnInit } from '@angular/core';
import { T, TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullname: string;
  choice: string;
  pluralized: number;
  useSanitize: boolean;

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
    this.choice = 'other';
    this.fullname = 'Shaun';
    this.pluralized = 1;
    this.useSanitize = true;
  }

  onLocaleChanged(event) {
  }

  genderChange(event) {
    this.choice = event.target.value;
  }

  fullNameChange(event) {
    this.fullname = event.target.value;
  }

  pluralizedChange(event) {
    this.pluralized = event.target.value;
  }
}
