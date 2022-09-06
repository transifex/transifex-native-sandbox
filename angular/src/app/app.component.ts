import { Component } from '@angular/core';
import { TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TX Native Angular Demo';

  constructor(private translationService: TranslationService) {
    translationService.init({
      token: '1/ff0741fd8174546b4cf42c75ee9cc12f0b6af504',
    });
  }

  async ngOnInit() {
    await this.translationService.getLanguages();
    await this.translationService.setCurrentLocale('en');
  }
}
