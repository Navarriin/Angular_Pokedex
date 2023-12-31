import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';

//Meus components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
//Meus modulos
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, RoutingModule, SharedModule],
})
export class PagesModule {}
