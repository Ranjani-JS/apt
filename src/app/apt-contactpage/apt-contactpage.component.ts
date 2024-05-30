import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-apt-contactpage',
  standalone: true,
  imports: [CommonModule,FormsModule,MatIconModule],
  templateUrl: './apt-contactpage.component.html',
  styleUrl: './apt-contactpage.component.scss'
})
export class AptContactpageComponent {
  email :string = 'aptmasala@gmail.com'
constructor(){}
}
