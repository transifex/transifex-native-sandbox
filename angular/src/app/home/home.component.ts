import { Component, OnInit } from '@angular/core';
import { T, TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @T('One morning, when Gregor Samsa woke from troubled dreams,\r\n  he found himself transformed in his bed into a horrible vermin. He lay on \r\n  his armour-like back, and if he lifted his head a little he could see his \r\n  brown belly, slightly domed and divided by arches into stiff sections. \r\n  The bedding was hardly able to cover it and seemed ready to slide off any \r\n  moment. His many legs, pitifully thin compared with the size of the rest \r\n  of him, waved about helplessly as he looked. \"What\'s happened to me?\" he \r\n  thought. It wasn\'t a dream. His room, a proper human room although a little \r\n  too small, lay peacefully between its four familiar walls. A collection of \r\n  textile samples lay spread out on the table - Samsa was a travelling \r\n  salesman - and above it there hung a picture that he had recently cut out \r\n  of an illustrated magazine and housed in a nice, gilded frame.<\/p>\r\n  <p>It showed a lady fitted out with a fur hat and fur boa who sat upright, \r\n  raising a heavy fur muff that covered the whole of her lower arm towards\r\n   the viewer. Gregor then turned to look out the window at the dull weather. \r\n   Drops<\/p>',
  { _key: 'text.home_body_new', sanitize: true })
  home_text: string;
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
