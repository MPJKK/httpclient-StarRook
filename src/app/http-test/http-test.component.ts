import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  tulos = 'Moro';
  apitulos = 'Make a request';
  apiAddress = 'http://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=0&alpha=g&page=1';
  apiOsoite = 'http://media.mw.metropolia.fi/wbma/media';

  constructor(private http: HttpClient) {

  }

  getJson() {

      interface Myinterface {
          license: string;
      }

      this.http.get<Myinterface>('assets/package.json').subscribe((data) => {
         this.tulos = data.license;
         console.log(this.tulos);
       });
  }

  getFromApi() {

        interface RunescapeItemInterface {
            items: any;
        }

        this.http.get<RunescapeItemInterface>(this.apiAddress).subscribe((data) => {
            this.apitulos = data.items;
            console.log(this.apitulos);
        });
  }

  onKey(event: any) {
      interface RunescapeItemInterface {
          items: any;
      }

      this.http.get<RunescapeItemInterface>('http://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?category=0&alpha=' + event.target.value + '&page=1').subscribe((data) => {
          this.apitulos = data.items;
          console.log(this.apitulos);
      });
  }

  ngOnInit() {
      this.getFromApi();
  }

}
