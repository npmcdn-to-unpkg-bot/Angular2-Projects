import { Component } from '@angular/core';

@Component({
    selector: 'template_variables',
    templateUrl: 'components/template_variables/template_variables.html'
})
export class tempVarComponent  {
    name:string;

    constructor() {

        this.name = 'Muzzammil';
     }


}