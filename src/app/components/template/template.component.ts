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

 

    onItemClick(template_id:any)
    {

      
      this.http.post<any[]>('http://localhost:4201/template' , {template_id:template_id})
      .subscribe(next => console.log(next));
      

    }

  ngOnInit(): void {
  }

}

