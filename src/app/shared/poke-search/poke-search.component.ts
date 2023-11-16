import { Component, HostListener } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: [
    './poke-search.component.scss',
    './poke-search.responsivity.component.scss',
  ],
})
export class PokeSearchComponent {
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
