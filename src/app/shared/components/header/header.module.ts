import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [HeaderComponent],
  imports: [RouterModule, SharedModule, CommonModule,MatToolbarModule,MatButtonModule,MatButtonToggleModule,MatIconModule],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderMOdule {}
