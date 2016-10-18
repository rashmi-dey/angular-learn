import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { PhoneLoader } from './phoneLoader';

@Component({
  selector: 'my-app',
  templateUrl: './phones.html',
  providers: [PhoneLoader]
})
export class PhonesComponent {
  phones: {}[];
  phonesText: string;

  constructor(phoneLoader: PhoneLoader) {
    const phoneObs: Observable<Response> = phoneLoader.load(); // Observable<Response> is implicit, so we can write as  const phoneObs = phoneLoader.load();
    phoneObs.subscribe((res: Response) => {
      console.log(res);
      this.phones = res.json();   // means "parse as JSON"
      this.phonesText = res.text();
    });
  }
}
