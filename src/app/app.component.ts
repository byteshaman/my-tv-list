import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { Show, shows } from './shows.data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CarouselModule, DialogModule]
})
export class AppComponent {
  title = 'my-tv-list';
  visible = false;
  shows = shows;
  selectedShow: Show | null = null;

  openDialog(show: Show) {
    if (show.subItems) {
      this.selectedShow = show;
      this.visible = true;
    }
  }

}
