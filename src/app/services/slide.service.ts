import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideService extends DataService{

  constructor(http:HttpClient) {
    super("http://localhost:8000/api/slides",http);
   }
}
