import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImgDataService } from 'src/app/shared/img-data.service';
import { Img } from 'src/app/shared/img';

@Component({
  selector: 'fv-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  Images: any = [];

  constructor(
    public router: Router,
    public service: ImgDataService
  ) { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    return this.service.getImages().subscribe((data: {}) => {
      this.Images = data;
    })
  }

}
