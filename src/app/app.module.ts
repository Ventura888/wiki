import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {AppRoutingModule} from './app-routing.module';
import { CKEditorModule } from 'ng2-ckeditor';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {ValuesComponent} from './components/values/values.component';
import {ValueDetailComponent} from './components/value-detail/value-detail.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { NewValueComponent } from './components/new-value/new-value.component';
import { ValueSearchComponent } from './components/value-search/value-search.component';
import {AgmCoreModule} from '@agm/core';
import { AboutComponent } from './components/about/about.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ValuesComponent,
    ValueDetailComponent,
    SidebarComponent,
    NewValueComponent,
    ValueSearchComponent,
    AboutComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CKEditorModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkEVX-UV1iJ2b-oLbsP8CQ_ikMrt5Mmo4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
