import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  urlStudents = `http://127.0.0.1:8000/api/v1/student/`;

  constructor(private http: HttpClient) {
  }
  getStudents(): Observable<any> {
    return this.http.get(this.urlStudents);
  }
}
