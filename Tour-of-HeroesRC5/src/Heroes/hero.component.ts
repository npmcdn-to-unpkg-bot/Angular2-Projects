import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroDetail/hero';
import { HeroService } from '../services/hero.service'




@Component({
  selector: 'heroes',
  templateUrl:'src/Heroes/hero.component.html',
  styleUrls:['src/Heroes/hero.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  // getHeroes() {
  //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  //   // console.log(this.heroes)
  //   // this.heroes=this.heroService.getHeroes();
  // }
   getHeroes() {
    this.heroService.getHeroSlowly().then(heroes => 
    console.log(this.heroes= heroes)
    )    
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}

 