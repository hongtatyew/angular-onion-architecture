import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToStringPipe } from './to-string.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ToStringPipe
  ],
  exports: [
    ToStringPipe
  ],
})
export class SharedPipesToStringModule {}
