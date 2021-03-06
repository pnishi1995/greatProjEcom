import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderMOdule } from 'src/app/shared/components/header/header.module';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from '../../shared/components/carousel/carouselHolder.component';
import { HomeService } from './home.service';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, CarouselHolderComponent],
  imports: [
    // ByeartTableModule,
    SharedModule,
    HeaderMOdule,
    CommonModule,
    FooterModule,
    MatButtonModule,
    CarouselModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
