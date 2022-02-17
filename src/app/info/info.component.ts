import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  searchResults!: string;
  characters = [
    { id: 11, name: 'Liya', country: 'Indonesia'},
    { id: 12, name: 'Yakob', country: 'Armenia'},
    { id: 13, name: 'John', country: 'USA'},
    { id: 14, name: 'Leroy', country: 'England'},
    { id: 15, name: 'Hiroku', country: 'Argentina'},
    { id: 16, name: 'Kolya', country: 'Ukraine'},
    { id: 17, name: 'Molly', country: 'USA'},
    { id: 18, name: 'yo-yo', country: 'Austria'},
    { id: 19, name: 'Johnny', country: 'Germany'},
    { id: 19, name: 'Co-co', country: 'Germany'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
