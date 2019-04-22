import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UiProvider {

  enableSegments:boolean

  constructor(public http: HttpClient) {
    console.log('Hello UiProvider Provider');
    this.enableSegments = false
  }
  
}
