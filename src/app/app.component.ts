import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Alexandre Vauthier';

  constructor() {
  }

  ngOnInit(){
    if(this.detectMob()){
      let header = document.querySelector("header")
      let headerH = Math.round(window.innerHeight);
      if(header){
        if (Math.round(window.innerHeight)>headerH+100 || Math.round(window.innerHeight)<headerH-100)
        {
          headerH=Math.round(window.innerHeight);
        }
        header.style.height = headerH+"px";
      }
    }
  }

  public detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

}
