import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';

import { MyVideoPlayerComponent } from './my-video-player/my-video-player.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    MyVideoPlayerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[MyVideoPlayerComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector:Injector){
  }

  
  ngDoBootstrap(){ 
    const webComponent=createCustomElement(MyVideoPlayerComponent,{injector:this.injector});
    
    customElements.define('custom-player',webComponent)
   }
 }
