import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../heroDetail/hero-detail.component';
import { HeroService } from '../services/hero.service'


import { AppComponent } from '../app/app.component'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
              ],
    declarations: [
        AppComponent,
        HeroDetailComponent
        ],
        // providers:[HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {

}