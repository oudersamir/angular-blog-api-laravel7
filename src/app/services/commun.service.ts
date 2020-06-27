import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunService   extends DataService{

  constructor(Http: HttpClient) { 
    super('http://localhost:8000/api/page',Http);
  }
}
