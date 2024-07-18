import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SubdivisionDataService {
  url: string = "./assets/subdivision.json";

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
