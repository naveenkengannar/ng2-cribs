import { Component, OnInit } from '@angular/core';
import { CribsService } from '../cribs.service';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];
  sortDirection = 'asc';
  sortField = 'price';
  constructor(
    private cribsService: CribsService, 
    private utilService: UtilService) { }

  ngOnInit() {
    this.cribsService.getAllCribs()
    .subscribe(
      data => this.cribs = data,
      error => console.log(error.statusText)      
    );

    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    );
  }

}
