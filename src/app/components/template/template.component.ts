// https://ng-bootstrap.github.io/#/components/modal/examples
//https://www.positronx.io/angular-form-validation-with-template-driven-using-bootstrap/

import { NgbModal, ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export var temp_id = 0;

export class User {
  public fullName!: string;
  public email!: string;
  public phoneNumber!: number;
  public aboutMeS!: string;
  public aboutMe!: string;
  public otherPassions!: string;
  public skillset!: string;
  public skill01!: string;
  public skill02!: string;
  public classDay!: string;
  public classTime!: string;
  public gridCheck!: any;
  public skillTitle01!: string;
  public skillTitle02!: string;
  public skill01Pic!: string;
  public skill02Pic!: string;
  public aboutMePic!: string;
  public passionsPic!: string;
  public gallery!: String;
  public gallery1!: String;
  public gallery2!: String;
  public gallery3!: String;
  public gallery4!: String;
  public resume!: String;
  

}
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  closeResult = '';
  messages = this.http.get<any[]>('http://localhost:4201');

    constructor(private http: HttpClient, private modalService: NgbModal) {}
    
    model = new User();

    ngOnInit(): void {
    }
 
    open(content: any, template_id:any) {

        temp_id = template_id;

        
    
        this.modalService.open(content, {scrollable: true, size:'xl', ariaLabelledBy:"formModal"} ).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        
      });
  }
  
  onSubmit(form: { value: any; }) {
    this.modalService.dismissAll('Dismissed after saving data'); // close the form after submission

    var fullName = (<HTMLInputElement>document.getElementById('fullName')).value;
    var email = (<HTMLInputElement>document.getElementById('email')).value; 
    var aboutMeS = (<HTMLInputElement>document.getElementById('aboutMeS')).value;
    var aboutMe = (<HTMLInputElement>document.getElementById('aboutMe')).value;
    var aboutMePic = (<HTMLInputElement>document.getElementById('aboutMePic')).value; 
    var otherPassions = (<HTMLInputElement>document.getElementById('otherPassions')).value; 
    var passionsPic = (<HTMLInputElement>document.getElementById('passionsPic')).value; 
    var skillset = (<HTMLInputElement>document.getElementById('skillset')).value; 
    var skillTitle01 = (<HTMLInputElement>document.getElementById('skillTitle01')).value; 
    var skill01 = (<HTMLInputElement>document.getElementById('skill01')).value; 
    var skill01Pic = (<HTMLInputElement>document.getElementById('skill01Pic')).value; 
    var skillTitle02 = (<HTMLInputElement>document.getElementById('skillTitle02')).value; 
    var skill02 = (<HTMLInputElement>document.getElementById('skill02')).value; 
    var skill02Pic = (<HTMLInputElement>document.getElementById('skill02Pic')).value; 
    var classDay = (<HTMLInputElement>document.getElementById('classDay')).value;
    var classTime = (<HTMLInputElement>document.getElementById('classTime')).value;
    var gallery = (<HTMLInputElement>document.getElementById('gallery')).value; 
    var gallery1 = (<HTMLInputElement>document.getElementById('gallery1')).value; 
    var gallery2 = (<HTMLInputElement>document.getElementById('gallery2')).value; 
    var gallery3 = (<HTMLInputElement>document.getElementById('gallery3')).value; 
    var gallery4 = (<HTMLInputElement>document.getElementById('gallery4')).value; 
    var resume = (<HTMLInputElement>document.getElementById('resume')).value; 


    let sitedata = [];
    let data = {
      page_item_url: "1",
       "data": {
        "Passion Image": passionsPic,
        "Passion Text": otherPassions,
        "Project 2 Title": skillTitle02,
        "Resume Image": "https://irp-cdn.multiscreensite.com/89aa7f51/dms3rep/multi/Photographer-Resume-Example-Template.png",
        "project 1 Image": skill01Pic,
        "About Text": aboutMeS,
        "Project 1 description": skill01,
        "Intro": aboutMe,
        "About Me": aboutMePic,
       
        "Gallery": [
{
                "image": gallery,
                "description": "",
                "title": ""
            },
            {
                "image": gallery1,
                "description": "",
                "title": ""
            },
            {
                "image": gallery2,
                "description": "",
                "title": ""
            },
            {
                "image": gallery3,
                "description": "",
                "title": ""
            },
            {
                "image": gallery4,
                "description": "",
                "title": ""
            }
        ],
        "Project 1 Title": skillTitle01,
        "Skills Text": skillset,
        "Project 2 Video": skill02Pic,
        "Project 2 description": skill02
    }
  }
sitedata.push(data);


  this.http.post<any[]>('http://localhost:4201/template' , {template_id:temp_id, sitedata, email,fullName })
  .subscribe(next => console.log(next));  
  
  }
}
