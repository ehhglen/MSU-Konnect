import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  messages = this.http.get<any[]>('http://localhost:4201');

    constructor(private http: HttpClient) {}


  ngOnInit(): void {
  }

}

