import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { OncallDto } from './Oncall_Dto';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl:String = "http://localhost:8000/login/search";
  searchStr:string;
  Username:string;
  
  constructor(private http:HttpClient) { }

  SearchDetails(SearchText): Observable<OncallDto> {
    return this.http.get("http://localhost:8000/search/params",{ params: { params: SearchText } }).pipe(
        map(item => {
          return item as OncallDto;
        })
    );
};
}
