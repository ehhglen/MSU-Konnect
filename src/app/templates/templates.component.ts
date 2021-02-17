import { Component, OnInit } from '@angular/core';
import {​​​​​ ApiService }​​​​​ from '../api.service';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  templates;
  constructor(private apiService:ApiService) {​​​​​ }​​
  ngOnInit(): void {​​​​​
    this.apiService.getTemplates().subscribe((data) =>{​​​​​
      console.log(data);
      this.templates = data['templates'] ;
    }​​​​​);
  }​​​​
}

