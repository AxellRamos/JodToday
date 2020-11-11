import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pet: string ="empleos";

  constructor(public router:Router) {
    this.pet = "empleos";
  }

  empleo(){
    this.router.navigate(['empleoperfil']);
  }
  pasan(){
    this.router.navigate(['pasantia']);
  }

}