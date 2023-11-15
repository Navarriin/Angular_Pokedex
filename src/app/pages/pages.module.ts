import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RoutingModule],
})
export class PagesModule {}
