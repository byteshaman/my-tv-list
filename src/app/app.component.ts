import { Component, ViewChild } from '@angular/core';
import { Carousel, CarouselModule, CarouselPageEvent, CarouselResponsiveOptions } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { Show, shows, SubItem } from './shows.data';
import { NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CarouselModule, DialogModule, NgTemplateOutlet]
})
export class AppComponent {
  visible = false;
  shows = shows;
  selectedShow!: Show;
  selectedSubItem!: Show;

  // carousel
  @ViewChild('carousel') carousel!: Carousel;
  responsiveOptions: CarouselResponsiveOptions[] = [ 
    { breakpoint: '600px', numVisible: 1, numScroll: 1 } ,
    { breakpoint: '900px', numVisible: 2, numScroll: 2 }
  ];

  getNextPoster(subItems: SubItem[]) {
    const first = subItems.shift();
    subItems.push(first!);
  }

  openDialog(show: Show) {
    if (!show.subItems) return;// Avoid error on elements without subItems that don't need to open a dialog

    this.selectedShow = show;
    this.visible = true;
    this.selectedSubItem = this.selectedShow.subItems![0];
  }

  onCarouselPageChange(event: CarouselPageEvent) {
    this.selectedSubItem = this.selectedShow.subItems![event.page!];
  }

  resetCarousel() {
    if (this.carousel) {
      this.carousel.page = 0; // Reset the carousel to the first page
    }
  }

}

