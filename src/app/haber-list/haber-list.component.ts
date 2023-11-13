import { Component, OnInit, HostListener, Input, ChangeDetectorRef } from '@angular/core';
import { HaberListService } from '../services/haber-list.service';
import { ActivatedRoute } from '@angular/router';
import { HaberList } from './haber-list';

@Component({
  selector: 'app-haber-list',
  templateUrl: './haber-list.component.html',
  styleUrls: ['./haber-list.component.css'],
  providers: [HaberListService],
})
export class HaberListComponent implements OnInit {
  constructor(private datas: HaberListService, private route: ActivatedRoute) {}
  getDatas: HaberList[] = [];
  
  categoryName: string = '';
  page: number = 1;
  flag: boolean = false;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categoryName = params['categoryName'];
       this.loadData(); 
    }); 
  }
  loadData() {
    if (this.categoryName == undefined) {
      this.datas.getData('', this.page).subscribe((data) => {
        this.getDatas = [];
        this.getDatas.push(data);
        this.flag = false;
      });
    } else {
      this.datas.getData(this.categoryName, this.page).subscribe((data) => {
        this.getDatas = [];
        this.getDatas.push(data);
        this.flag = false;
      });
    }  
  }
 
  
}
