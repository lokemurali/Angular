import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService } from '../services/search.service';
import { dataModel } from 'src/model/dataModel';
import { OncallDto } from '../services/Oncall_Dto';

@Component({
  selector: 'app-search-det',
  templateUrl: './search-det.component.html',
  styleUrls: ['./search-det.component.css']
})
export class SearchDetComponent implements OnInit {
  oncalldata: dataModel;
  Username:string;
  TextSearch:string;
  ShowEditpanel: boolean;
  SearchPanel: boolean;
  showCount: number = 0;
  onCallData: any[];
  ShowSearchResult:Boolean = true; 
  
  
  constructor(private SearchSer:SearchService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.TextSearch = this.SearchSer.searchStr;
    this.Username = this.SearchSer.Username;
    this.onEnter();
  }

  onEnter(){
    this.SearchSer.SearchDetails(this.TextSearch).subscribe(
        (data:any) => {
          this.oncalldata = data.map((onCallDto: OncallDto) =>
          dataModel.fromDTO(onCallDto));
          this.onCallData = data;
          this.showCount=data.length;
          console.log(this.onCallData);
          console.log(this.oncalldata);
        }
      );
}

BacktoSearch()
{}

editSearch(){
  this.router.navigate(['/search_list/search-edit']);

}

}
