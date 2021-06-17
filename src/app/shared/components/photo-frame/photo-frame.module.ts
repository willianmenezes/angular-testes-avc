import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LikeWidgetModule } from '../like-widget/like-widget.module';
import { PhotoFrameComponent } from './photo-frame.component';

@NgModule({
  imports: [CommonModule, LikeWidgetModule],
  exports: [PhotoFrameComponent],
  declarations: [PhotoFrameComponent],
  providers: [],
})
export class PhotoFrameModule {}
