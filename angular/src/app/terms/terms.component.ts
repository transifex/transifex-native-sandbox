import { Component, OnInit } from '@angular/core';
import { T, TranslationService } from '@transifex/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  @T('home', { _key: 'text.home' })
  home: string;
  @T('terms of service', { _key: 'text.terms_of_service_1' })
  terms: string;
  @T('privacy policy', { _key: 'text.privacy_policy_1' })
  privacy: string;

  localeChangeSubscription: Subscription;

  constructor(private translationService: TranslationService) {
    translationService.getLanguages().then(lang => console.log(lang));
    this.localeChangeSubscription = this.translationService.localeChanged.subscribe(
      (locale) => {
        const lang = this.translationService.getCurrentLocale();
        console.log(lang);
      },
    );
  }

  ngOnInit(): void {
  }

  onLocaleChanged(event) {
  }
}
