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

  }

  displayMenu(){
    const menu = document.getElementById("menu")
    const menuButton = document.getElementById("menu-button")
    if (menu && menuButton && menu.parentElement) {
      if (menu.style.display != "grid"){
        menu.style.display = "grid"
        menuButton.style.margin = "auto"
        menu.parentElement.style.right = "0"
        menu.parentElement.style.backgroundColor = "rgba(0, 0, 0, 0.95)"
        menu.parentElement.style.width = "100%"
      } else {
        menu.style.display = "none"
        menuButton.style.margin = "2vh auto"
        menu.parentElement.style.right = "4vw"
        menu.parentElement.style.background = "none"
        menu.parentElement.style.width = "100px"

      }
    }
  }

}
