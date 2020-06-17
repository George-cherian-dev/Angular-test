import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpMessageService {

  constructor() { }
  public handleError(error:HttpErrorResponse | any){

    let errormsg:string;

    if (error.error instanceof ErrorEvent){
      errormsg = error.error.message
    } else {
      errormsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return throwError(errormsg);

  }
}
