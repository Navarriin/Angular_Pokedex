import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  fixo: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY >= 120) {
      this.fixo = true;
    } else {
      this.fixo = false;
    }
  }
}
