import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild,AfterViewInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import videojs from "video.js"
import { IOptions } from './IOptions';

@Component({
  selector: 'app-video-player',
  templateUrl: './my-video-player.component.html',
  styleUrls: ['./my-video-player.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class MyVideoPlayerComponent implements OnInit,OnDestroy,OnChanges,AfterViewInit {
  @ViewChild('target') target;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input('myOptions') Options: IOptions;
  player: videojs.Player;
 
  constructor(
    private elementRef: ElementRef,
  ) { }

  
  ngAfterViewInit(): void {
       // instantiate Video.js
       this.videoPlayer(this.Options);
    
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.Options);
  }

  

ngOnInit() {
    
  }
  

  ngOnDestroy() { 
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }


  videoPlayer(myOptions){

    // console.log(this.Options)
    let myobj=JSON.stringify(myOptions);
    let NewSource=JSON.parse(myobj);
    console.log("NewSource",NewSource)
    let FinalSource=JSON.parse(NewSource);
    console.log("FINAL SOURCE",FinalSource)
    console.log(this.target.nativeElement);

    
    this.player = videojs(this.target.nativeElement, FinalSource, function onPlayerReady() {
      console.log('onPlayerReady', this);
      this.on('pause',()=>{
        console.log("video is paused")
      })
    }); 

  }


}
