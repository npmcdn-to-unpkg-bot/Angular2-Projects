import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroDetail/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'src/DashBoard/dashboard.component.html'

})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private herOService:HeroService) { }
    ngOnInit() {
        this.herOService.getHeroSlowly().then(heroes => console.log(this.heroes=heroes.slice(1,5)))
    }
    gotoDetail() {

    }
}