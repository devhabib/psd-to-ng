import { Component, AfterViewInit } from '@angular/core';
declare let Swiper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'PSD-to-NG';

  ngAfterViewInit() {
    // new Swiper('.swiper-container', {
    //   pagination: '.swiper-pagination',
    //   paginationClickable: true,
    //   nextButton: '.swiper-button-next',
    //   prevButton: '.swiper-button-prev',
    //   autoplay: 3000,
    //   spaceBetween: 30,
    //   direction: 'horizontal',
    //   loop: true,
    // });
  }
}
