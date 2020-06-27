import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: [
  ]
})
export class AccueilComponent implements OnInit {
  rowOfServices:number=3;
  rowOfPosts:number=2;
  constructor() { }

  ngOnInit(): void {
  }

}
