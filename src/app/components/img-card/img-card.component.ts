import { Img } from './../../shared/img';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fv-imgCard',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent implements OnInit {

  @Input() image: Img;

  likes: string;
  references: string;
  

  constructor() { }

  ngOnInit() {
    this.likes = this.formatFeeds(this.image.likes);
    this.references = this.formatFeeds(this.image.references);
  }

  formatFeeds(n: number) {
    if(n >= 1000 && n <1_000_000) {
      return Math.trunc( n / 1000 )+ 'K'; 
    }

    else if(n >= 1_000_000 && n < 1_000_000_000) {
      return Math.trunc( n / 1_000_000 )+ 'M';
    }

    else if(n >= 1_000_000_000) {
      return Math.trunc( n / 1_000_000_000 )+ 'B';
    }

    else {
      return n + '';
    }
  }
}
