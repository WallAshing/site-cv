import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayParagraph(): void{
    const textBox: HTMLElement | null = document.getElementById("about-me-box")
    const button: HTMLElement | null = document.getElementById("about-me-button")
    if (textBox && button) {
      if (textBox.style.display != "none"){
        textBox.style.display = "none"
        button.style.position = "initial"
        button.style.paddingTop = "10px"
      } else {
        textBox.style.display = "block"
        button.style.position = "absolute"
        button.style.paddingTop = "0"
      }
    }
  }
}
