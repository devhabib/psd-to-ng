import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 'auto',
    // slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: false,
    // watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: false,
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    spaceBetween: 50,
    // breakpoints: {
    // when window width is >= 320px
    // 320: {
    // slidesPerView: 1,
    // },
    // },
  };
}
