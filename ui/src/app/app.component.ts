import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any = 'app';


  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('api/hello').subscribe(data => {
      // Read the result field from the JSON response.
      this.title = data.text();
    });
  }
}
