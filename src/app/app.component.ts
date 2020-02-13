import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-front';
  langs: string[] = [];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en', 'fr', 'it']);
    this.langs = this.translate.getLangs();
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}