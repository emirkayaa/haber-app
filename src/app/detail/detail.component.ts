import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HaberListService } from '../services/haber-list.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private route:ActivatedRoute,private http:HttpClient) { }
  ngOnInit(){
    /* this.route.params.subscribe(params => {
      this.datas.getData()
    }) */

  }
  loadData() {
    this.http.get('https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=8dc5040e74934888b1d9c6a0467cef33')
  }
}
