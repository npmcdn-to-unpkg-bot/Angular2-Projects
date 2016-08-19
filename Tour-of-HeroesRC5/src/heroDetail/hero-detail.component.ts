import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { HeroService } from '../services/hero.service'

import { Hero } from './hero'
@Component({
    selector: 'hero-detail',
    template: `
         <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>

    <div>
        <label>id:</label>
        {{hero.id}}
    </div>
    <div>
    <label>Name:</label>
    <input [(ngModel)]="hero.name" placholder="name">
    </div>
    </div>
    `
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
            .then(hero => console.log(this.hero=hero)); 
        })
    }
}