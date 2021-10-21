import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypicodePost} from "../models/typicode";

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {

  constructor(
    private http: HttpClient
  ) {
  }

  getPosts() {
    return this.http.get<TypicodePost[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
