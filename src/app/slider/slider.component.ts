import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageno=1;
  imageobject=[];
  image='';
  constructor() { }

  ngOnInit(): void {

    this.image='https://wallpapercave.com/wp/wp3533648.jpg';
    this.imageobject=[
      {img:'https://wallpapercave.com/wp/wp3533648.jpg',
      index:1,
       },
      {img:'https://wallpapercave.com/wp/wp4077720.jpg',
      index:2
    },
      {img:'https://wallpapercave.com/wp/wp4300712.jpg',
      index:3
    },
    ]
  }
  

  change(data){
    if(data=='pre'){
      if(this.imageno>1){
        this.imageno=this.imageno-1;
      }
      if(this.imageno>=1){
        const len=this.imageobject.length;
        for(let i=0;i<len;i++){
          if(this.imageno == this.imageobject[i].index){
            this.image=this.imageobject[i].img
          }
        }   
      }
    }
    if(data=='next'){
      if(this.imageno<3){
        this.imageno=this.imageno+1;
      }
      if(this.imageno<=3){
        const len=this.imageobject.length;
        for(let i=0;i<len;i++){
          if(this.imageno == this.imageobject[i].index){
            this.image=this.imageobject[i].img
          }
        }
      }
    }
  }


}
