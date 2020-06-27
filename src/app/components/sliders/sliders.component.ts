import { SlideService } from './../../services/slide.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styles: [
  ]
})
export class SlidersComponent implements OnInit {
  
  slides: any[];
  constructor(private slideService:SlideService) { }

  ngOnInit(): void {
    this.getSlides();
  }
  getSlides(){
    this.slideService.getAll().subscribe(
      response=> this.slides=(JSON.parse(JSON.stringify(response)).data)
    )
  }

}
