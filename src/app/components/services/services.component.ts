import { ServiceService } from './../../services/service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: [
  ]
})
export class ServicesComponent implements OnInit {
   services:any[];
   
   @Input()rowServices:number;

  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
  this.getServices();
  }
  getServices(){
    this.serviceService.getAll(this.rowServices).subscribe(
      response=> this.services=(JSON.parse(JSON.stringify(response)).data)
    )
  }

}
