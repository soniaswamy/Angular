import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FiltersComponent } from './filters/filters.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { TabsComponent } from './tabs/tabs.component';
import { BannerComponent } from './banner/banner.component';
import { TimerComponent } from './timer/timer.component';
import { ProductComponent } from './product/product.component';
import { PricePipe } from './pipes/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FiltersComponent,
    SortingPipe,
    ElapsedPipe,
    TabsComponent,
    BannerComponent,
    TimerComponent,
    ProductComponent,
    PricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
