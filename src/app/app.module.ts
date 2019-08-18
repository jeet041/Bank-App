import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FetchService } from './fetch.service';

import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

import {NgxPaginationModule} from 'ngx-pagination';

import { FilterPipe } from './filter.pipe';
import { RequestCache } from './request-cache.service';
import { CachingInterceptor } from './caching-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [FetchService,RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
