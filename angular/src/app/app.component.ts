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
      token: '1/066926bd75f0d9e52fce00c2208ac791ca0cd2c1',
    });
  }

  async ngOnInit() {
    await this.translationService.getLanguages();
    await this.translationService.setCurrentLocale('en');
  }
}
