import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [CommonModule, PerfectScrollbarModule, MatIconModule],
  exports: [PerfectScrollbarModule, MatIconModule],
})
export class SharedModule {}
