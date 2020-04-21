import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceFirstComponent } from './components/service-first/service-first.component';
import { ServiceSecondComponent } from './components/service-second/service-second.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ClientComponent } from './components/client/client.component';
import { CountersComponent } from './components/counters/counters.component';
import { FeaturesComponent } from './components/features/features.component';
import { MapComponent } from './components/map/map.component';
import { SponsorComponent } from './components/sponsor/sponsor.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { WorksComponent } from './components/works/works.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceFirstComponent,
    ServiceSecondComponent,
    QuoteComponent,
    AboutComponent,
    BlogComponent,
    ClientComponent,
    CountersComponent,
    FeaturesComponent,
    MapComponent,
    SponsorComponent,
    TeamComponent,
    TestimonialComponent,
    WorksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
