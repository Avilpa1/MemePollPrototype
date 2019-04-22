import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UiProvider {

  enableUI:boolean
  enableSegments: boolean

  constructor(public http: HttpClient) {
    console.log('Hello UiProvider Provider');
    this.enableUI = false
  }
  
}
