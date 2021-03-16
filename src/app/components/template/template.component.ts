// https://ng-bootstrap.github.io/#/components/modal/examples

import { NgbModal, ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  closeResult = '';
  messages = this.http.get<any[]>('http://localhost:4201');

    constructor(private http: HttpClient, private modalService: NgbModal) {}
    
    ngOnInit(): void {
    }
 
    open(content: any) {
      this.modalService.open(content, {scrollable: true, size:'xl', ariaLabelledBy:"formModal"} ).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      });
  }
  // post() {
    //   this.http.post<any>('http://localhost:4201/template', {username: 'john', password: 'asdf'})
    //   .subscribe(next => console.log(next));
    // }
}

