import { Component, Sanitizer } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-apt-homepage',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CarouselModule,
    CommonModule,
  ],
  templateUrl: './apt-homepage.component.html',
  styleUrl: './apt-homepage.component.scss',
})
export class AptHomepageComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: false,
    autoWidth: true,
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  images = [
    { image: `/assets/banner/b1.png`, id: 'B1', title: 'APT' },
    { image: `/assets/banner/b2.png`, id: 'B1', title: 'APT' },
    { image: `/assets/banner/b3.png`, id: 'B1', title: 'APT' },
  ];

  url: any;

  videos = [
    'https://www.youtube.com/embed/jTVZEDnEfB0',
    'https://www.youtube.com/embed/1bnyRKNwZ3w',
    'https://www.youtube.com/embed/OeMy-vWxEmA',
    // 'https://www.youtube.com/embed/rf5XjbbAjmU',
    // 'https://www.youtube.com/embed/ys19YMfD9As',
    // 'https://www.youtube.com/embed/QqMS7ZREG1s'
  ] as any[];

  constructor(private router: Router, public sanitize: DomSanitizer) {
    this.url = this.sanitize.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/jTVZEDnEfB0'
    );
    this.videos = this.videos.map(video => sanitize.bypassSecurityTrustResourceUrl(video));
  }
  aboutUs() {
    this.router.navigate(['about']);
  }
  watchMore(){
    this.router.navigate(['video']);
  }
}
