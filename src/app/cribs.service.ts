import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject();
  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get("./../data/cribs.json")
      .map(rs => rs.json() );
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}
