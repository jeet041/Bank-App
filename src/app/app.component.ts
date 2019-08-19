import { Component } from '@angular/core';
import { FetchService } from './fetch.service';
import {PageEvent} from '@angular/material';
import { OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  banks$;
  p: number = 1;
  favorites=[];
  pageEvent: PageEvent;
  searchText;
  constructor(private fetchService: FetchService){
    
  }
  cities = ['BANGALORE', 'PUNE', 'MUMBAI', 'CHENNAI', 'GOA'];

  fetchbanks(city){
    this.banks$ = this.fetchService.fetchbanks(city);
  }

  onChange(deviceValue) {
    console.log(deviceValue);
    this.fetchbanks(deviceValue);
}
showlist(){
  var retrievedData = localStorage.getItem("list");
  alert(retrievedData);
}
markfav(val){
  this.favorites.push(val);
  localStorage.setItem('list', JSON.stringify(this.favorites));
}
ngOnInit(){
  // localStorage.setItem('this.favorites', JSON.stringify());
};
}
