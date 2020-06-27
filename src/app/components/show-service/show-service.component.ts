import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styles: [
  ]
})
export class ShowServiceComponent implements OnInit {
  slug:string;
  service:any;
  constructor(private serviceService:ServiceService,private route:ActivatedRoute) { 

    
  }

  ngOnInit(): void {
    this.slug=this.route.snapshot.params.slug;
    this.getService();
  }

  getService(){

  this.serviceService.getOne(this.slug,"/show/").subscribe(
    response=>this.service=( (JSON.parse(JSON.stringify(response)).data))
  )
  }

}
