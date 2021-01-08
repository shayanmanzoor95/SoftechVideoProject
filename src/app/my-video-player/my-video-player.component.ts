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
  @ViewChild('target',{ static: false }) target;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input('myOptions') Options: IOptions;
  player: videojs.Player;
  rate=1;

  
 
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
//  this.addingComponents();
  }
  

  ngOnDestroy() { 
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

  // addingComponents(){
  //   this.player=videojs(this.elementRef.nativeElement);
  //   videojs.getComponent();
  //   const skipBehindButton = this.player.controlBar.addChild("button");
  //   var skipBehindButtonDom = skipBehindButton.el();
  //   skipBehindButtonDom.innerHTML = "30<<";
  //   skipBehindButton.addClass("buttonClass");

  //   var skipAheadButton = this.player.controlBar.addChild("button");
  //   var skipAheadButtonDom = skipAheadButton.el();
  //   skipAheadButtonDom.innerHTML = ">>30";
  //   skipAheadButton.addClass("buttonClass");
  // }

  videoPlayer(myOptions){

    // console.log(this.Options)
    let myobj=JSON.stringify(myOptions);
    let NewSource=JSON.parse(myobj);
    console.log("NewSource",NewSource)
    let FinalSource=JSON.parse(NewSource);
    console.log("FINAL SOURCE",FinalSource)
    console.log(this.target.nativeElement);

    
    this.player = videojs(this.target.nativeElement, FinalSource, onPlayerReady); 
    

    
    function onPlayerReady() {
      console.log('onPlayerReady', this);
      this.on('pause',()=>{
        console.log("video is paused")
      })

      this.on('ended',function(){
        videojs.log('over so soon?');
      })


      // this.on('ready',function(){
      //   setTimeout(()=>{
      //     this.height();x
      //     this.play();
      //     this.playbackRate();
      //     console.log("boom")
      //   },3000)
      // })


      this.on('pause',function(){
        let remaing=this.remainingTime();
        remaing=Math.round(remaing);
        console.log(remaing);
      })

      this.on('seeking',function(){
        let remaing=this.remainingTime();
        remaing=Math.round(remaing);
        console.log(remaing);
      })
    }
  }

  restart(){
    this.player.currentTime(0);
  }


  playBackrateIncrease(){
    if(this.rate<1){
      this.rate=this.rate+0.25;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==1){
      this.rate++
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==2){
      this.rate++;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==3){
      this.rate++;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
      // this.player.playbackRate(3);
  }

  playBackrateDecrease(){
    if(this.rate>1){
      this.rate--;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==1){
      this.rate=this.rate-0.25;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==0.75){
      this.rate=this.rate-0.25;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    else if(this.rate==0.50){
      this.rate=this.rate-0.25;
      console.log(this.rate)
      this.player.playbackRate(this.rate)
    }
    
  }



  SetAspectRatio1(){
    console.log("1:1")
    this.player.aspectRatio('16:9')
  }
  
  SetAspectRatio2(){
    // console.log("4:3")
    this.player.aspectRatio('3:2')
  }

  SetAttribute(){
    console.log("Padding set")
    let videoPlayer=videojs(this.target.nativeElement);
  }


}

