import { Component } from '@angular/core'


@Component({
selector:'arrays',
templateUrl:'components/arrays/arrays.html'

})

export class ArrComponent{
names:any[]=[];
    constructor() {
        this.names=['MuZz','saad','Yousuf','Aamir']
    }
}