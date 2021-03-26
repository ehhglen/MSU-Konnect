// https://ng-bootstrap.github.io/#/components/modal/examples

import { NgbModal, ModalDismissReasons, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators  } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  mainfrom!:FormGroup;

  name!:number; 

  email!:number;

  closeResult = '';
  messages = this.http.get<any[]>('http://localhost:4201');

    constructor(private http: HttpClient, private modalService: NgbModal, private fb:FormBuilder) {}
    
    ngOnInit(): void {

      this.mainfrom=this.fb.group({
        name: [this.name, [Validators.required]],
        email:[this.email,[Validators.required]],
      })  
  
  }
 
    open(content: any, template_id:any) {
      
      this.modalService.open(content, {scrollable: true, size:'xl', ariaLabelledBy:"formModal"} ).result.then((result) => {
        // var name = document.getElementById('inputFirstName')!;
        var inputValue = (<HTMLInputElement>document.getElementById('inputFirstName')).value;
        let movies = [];
            let movie = {
              page_item_url: "1",
               "data": {
                "Passion Image": "https://irp-cdn.multiscreensite.com/89aa7f51/dms3rep/multi/photo-1590153005020-236b736e06d1-805ab09d.jpg",
                "Passion Text": "<p class=\"rteBlock\">This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily.Make sure your titles stand out from the rest of the text.</p><br><p class=\"rteBlock\"> To change this text simply click it and choose &quot;edit.&quot; Highlight the text you want to change and start typing. This works for both the title and paragraph.</p>",
                "Project 2 Title": "<p class=\"rteBlock\">Adobe</p>",
                "Resume Image": "https://irp-cdn.multiscreensite.com/89aa7f51/dms3rep/multi/Photographer-Resume-Example-Template.png",
                "project 1 Image": "https://irp-cdn.multiscreensite.com/md/dmip/dms3rep/multi/skyscrapers-blue-sky.jpg",
                "About Text": "<p class=\"rteBlock\">Hi! I am a Photography major at Metropolitan State University of Denver. more detail more detail more detail more detail  more detail   more detail more detail more detail more detail Check out my work! </p>",
                "Project 1 description": "<p class=\"rteBlock\">Photoshop skills that I have been perfecting it for 100 years.</p>",
                "Intro": "<p class=\"rteBlock\">Welcome, I am a student at Metropolitan State University of Denver!</p>",
                "About Me": "https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1575486095597-13f6fc58054e.jpg",
               
                "Gallery": [
{
                        "image": "https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1542596594-649edbc13630.jpg",
                        "description": "",
                        "title": ""
                    },
                    {
                        "image": "https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1443916568596-df5a58c445e9.jpg",
                        "description": "",
                        "title": ""
                    },
                    {
                        "image": "https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1496282061992-d6a3994128a2.jpg",
                        "description": "",
                        "title": ""
                    },
                    {
                        "image": "https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1484712401471-05c7215830eb.jpg",
                        "description": "",
                        "title": ""
                    },
                    {
                        "image": "https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1517488629431-6427e0ee1e5f.jpg",
                        "description": "",
                        "title": ""
                    },
                    {
                        "image": "https://irp-cdn.multiscreensite.com/md/unsplash/dms3rep/multi/photo-1536010447069-d2c8af80c584.jpg",
                        "description": "",
                        "title": ""
                    }
                ],
                "Project 1 Title": "<p class=\"rteBlock\">Photoshop</p>",
                "Skills Text": "<p class=\"rteBlock\">This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily.Make sure your titles stand out from the rest of the text.</p><br><p class=\"rteBlock\"> To change this text simply click it and choose &quot;edit.&quot; Highlight the text you want to change and start typing. This works for both the title and paragraph.</p>",
                "Project 2 Video": "https://www.youtube.com/embed/WxfZkMm3wcg",
                "Project 2 description": "<p class=\"rteBlock\">This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily.Make sure your titles stand out from the rest of the text.</p><br><p class=\"rteBlock\"> To change this text simply click it and choose &quot;edit.&quot; Highlight the text you want to change and start typing. This works for both the title and paragraph.</p>"
            }
          }
        movies.push(movie);
        
        

        // this.closeResult = `Closed with: ${result}`;

        if (result == 'Save')
        {
          console.log('success');
          this.http.post<any[]>('http://localhost:4201/template' , {template_id:template_id})
          .subscribe(next => console.log(next));

          console.log(JSON.stringify(movies));

          this.http.post<any[]>('http://localhost:4201/collection' , movies)
          .subscribe(next => console.log(next));

        }
        else{

          console.log('fail');

        }

      });
    
  }

}
