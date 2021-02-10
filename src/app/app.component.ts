import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos = null;
  vector = [];
  
  x = 0;

  constructor(private http: HttpClient) { }

   

  ngOnInit() {
    this.http.get("https://demos.inbonis.com/api-coach-es-informa/activities")
      .subscribe(
        result => {
          this.articulos = result;
        },
        error => {
          console.log('problemas');
        }
      );
    
  }
 // seleccionada: string = this.articulos.description[0];
}
