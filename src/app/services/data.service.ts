import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public Http:Http) { 
    console.log('Data Services connected...');
  }

  getPosts() {
    return this.Http.get( 'https://jsonplaceholder.typicode.com/posts' )
     .map(res => res.json());
  }

}
