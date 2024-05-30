import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apt-videopage',
  standalone: true,
  imports: [],
  templateUrl: './apt-videopage.component.html',
  styleUrl: './apt-videopage.component.scss'
})
export class AptVideopageComponent {

  url: any;

  videos = [
    'https://www.youtube.com/embed/jTVZEDnEfB0',
    'https://www.youtube.com/embed/1bnyRKNwZ3w',
    'https://www.youtube.com/embed/OeMy-vWxEmA',
    'https://www.youtube.com/embed/rf5XjbbAjmU',
    'https://www.youtube.com/embed/ys19YMfD9As',
    'https://www.youtube.com/embed/QqMS7ZREG1s'
  ] as any[];

  constructor(private router: Router, public sanitize: DomSanitizer) {
    this.url = this.sanitize.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/jTVZEDnEfB0'
    );
    this.videos = this.videos.map(video => sanitize.bypassSecurityTrustResourceUrl(video));
  }
}
