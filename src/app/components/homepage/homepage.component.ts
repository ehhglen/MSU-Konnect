import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
   template:`
  <section class="hero is-link">
  <div class="hero-body">
    <p class="title">
      Link hero
    </p>
    <p class="subtitle">
      Link subtitle
    </p>
  </div>
</section>
  `

})



export class HomepageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  
}



