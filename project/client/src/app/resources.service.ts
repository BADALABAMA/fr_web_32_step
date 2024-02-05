import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  public currentTopic: string;

  constructor(public http: HttpClient) {}

  // ! dummy example of query, but it isn't necessary to do for us
  public getResources(): Observable<any> {
    return this.http.get('http://localhost:3000/resources').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  public getResourcesBack(): Observable<any> {
    this.currentTopic = 'back-end';

    return this.http.get('http://localhost:3000/resources/back-end').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
  public getResourcesFront(): Observable<any> {
    this.currentTopic = 'front-end';

    return this.http.get('http://localhost:3000/resources/front-end').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
  public getResourcesQA(): Observable<any> {
    this.currentTopic = 'qa';

    return this.http.get('http://localhost:3000/resources/qa').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
}
