import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
