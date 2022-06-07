import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { ArticleComponent } from './components/article/article.component';
import { reducers } from './reducers/reducers';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
