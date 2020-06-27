import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styles: [
  ]
})
export class ShowPostComponent implements OnInit {
  slug:string;
  post:any;
  constructor(private serviceService:ServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.slug=this.route.snapshot.params.slug;
    this.getService();
  }

  getService(){

  this.serviceService.getOne(this.slug,"/show/").subscribe(
    response=>this.post=( (JSON.parse(JSON.stringify(response)).data))
  )
  }

}
