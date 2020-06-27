
import {HttpClient}  from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class DataService{

    constructor(@Inject(String)private Url:string,private http:HttpClient){

    }


    getAll(limit?:number){
        return this.http.get(this.Url+'/'+limit).pipe(
            map(response=>response )
            
        )
    }

    getOne(slug:string,element:string){
        return this.http.get(this.Url+element+slug).pipe(
            map(response=>response )
            
        )
    }
}