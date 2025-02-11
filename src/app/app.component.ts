import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     CommonModule, MatIconModule, 
    MatToolbarModule,
     MatSidenavModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'APT-masala';
  

  // sidenavMenu(){
  // console.log('hi');
  // }

}
