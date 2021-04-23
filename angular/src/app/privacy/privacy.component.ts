import { Component, OnInit } from '@angular/core';
import { T } from '@transifex/angular';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  @T('home', { _key: 'text.home' })
  home: string;
  @T('terms of service', { _key: 'text.terms_of_service' })
  terms: string;
  @T('privacy policy', { _key: 'text.privacy_policy' })
  privacy: string;

  constructor() { }

  ngOnInit(): void {
  }

  onLocaleChanged(event) {
  }
}
