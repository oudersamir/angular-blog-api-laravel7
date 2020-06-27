import { CommunService } from './../../services/commun.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {
   page:any;
   slug:string='about-page';
  constructor(private communService:CommunService) { }

  ngOnInit(): void {
    this.getPageAbout(this.slug);
  }

  getPageAbout(slug:string){
   this.communService.getOne(slug,"/").subscribe(page=>this.page=JSON.parse(JSON.stringify(page)).data);
  }

}
