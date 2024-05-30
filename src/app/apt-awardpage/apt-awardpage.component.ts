import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-apt-awardpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apt-awardpage.component.html',
  styleUrl: './apt-awardpage.component.scss'
})
export class AptAwardpageComponent {
  awards = [
    {name: '', img: 'assets/award-1.png'},
    {name: '', img: 'assets/award-1.png'},
    {name: '', img: 'assets/award-1.png'},
    {name: '', img: 'assets/award-1.png'},
    {name: '', img: 'assets/award-1.png'},
    {name: '', img: 'assets/award-1.png'},
    {name: '', img: 'assets/award-1.png'},
    {name: '', img: 'assets/award-1.png'}
  ]
  constructor(){}
}
