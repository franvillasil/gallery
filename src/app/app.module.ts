import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { DetailsComponent } from './views/details/details.component';
import { HeaderComponent } from './components/header/header.component';
import { ImgCardComponent } from './components/img-card/img-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailsComponent,
    HeaderComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
