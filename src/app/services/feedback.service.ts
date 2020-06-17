import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpMessageService } from './process-http-message.service';
import { Feedback } from '../shared/feedbackModel';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private http:HttpClient, 
    private processHTTPMsgService: ProcessHttpMessageService
    ) { 

    }

    
  postFeedback(feedback:Feedback): Observable<Feedback>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };

    return this.http.post<Feedback>(environment.baseUrl+'feedback',feedback,httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
