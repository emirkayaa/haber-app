import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HaberListService } from '../services/haber-list.service';
import { HaberList } from '../haber-list/haber-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private datas: HaberListService) { }
  categoryName: string = '';
  veriler!: HaberList;
  search: string = '';
  ngOnInit() {
    const navbarToggle = document.getElementById("navbar-toggle");
    if (navbarToggle) {
      this.renderer.listen(navbarToggle, 'click', () => {
        const menu = document.querySelector(".md\\:hidden");
        if (menu) {
          menu.classList.toggle("hidden");
        }
      });
    }
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];
      
    });
  }
  
  
  loadData() {
    this.datas.getData(this.categoryName).subscribe(data => {
      this.veriler = data;
     
    });
  }
}