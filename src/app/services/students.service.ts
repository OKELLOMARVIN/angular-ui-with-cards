import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  urlStudents = `https://jsonplaceholder.typicode.com/users`;

  constructor(private http: HttpClient) {
  }
  getStudents(): Observable<any> {
    return this.http.get(this.urlStudents);
  }
}
