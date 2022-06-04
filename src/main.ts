import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


function detectMob() {
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

if(detectMob()){
  let screen = document.querySelector(':root');
  let screenH = Math.round(window.innerHeight);
  if(screen){
    if (Math.round(window.innerHeight)>screenH+100 || Math.round(window.innerHeight)<screenH-100)
    {
      screenH = Math.round(window.innerHeight);
    }
    //@ts-ignore
    screen.style.setProperty("--screenInnerHeight", (screenH+'px'))
  }
}




