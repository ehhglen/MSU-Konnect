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

  imageObject: Array<object> = [{
    image: 'https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg',
    thumbImage: 'https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg',
    alt: 'alt of image',
    title: 'title of image',
    showArrow: false
}, {
    image: 'https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg', // Support base64 image
    thumbImage: 'https://i.ytimg.com/vi/SQJrYw1QvSQ/maxresdefault.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    imageSize: {width: 605, height: 600, space: 3},
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    showArrow: false
}
];
    
};


