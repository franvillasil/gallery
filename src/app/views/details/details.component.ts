import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImgDataService } from 'src/app/shared/img-data.service';

@Component({
  selector: 'fv-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  Image: any;
  id: number;

  likes: string;
  references: string;

  constructor(
    private router: ActivatedRoute,
    public service: ImgDataService
    ) { }

  ngOnInit() {
    this.id = Number.parseInt(this.router.snapshot.paramMap.get('id'));

    this.loadImage(this.id);
  }

  loadImage(id: number) {
    return this.service.getImage(id).subscribe((data: {}) => {
      this.Image = data;
      this.likes = this.formatFeeds(this.Image.likes);
      this.references = this.formatFeeds(this.Image.references);

    });
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
