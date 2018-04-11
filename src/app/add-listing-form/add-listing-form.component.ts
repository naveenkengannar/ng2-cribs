import { Component, OnInit, ViewChild } from '@angular/core';
import { CribsService } from './../cribs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor(private cribService: CribsService) { }

  ngOnInit() {
  }
onCribSubmit(data) {
  this.cribService.addCrib(data);
  this.newCribForm.reset();
}
}
