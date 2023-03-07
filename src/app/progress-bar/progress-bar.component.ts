import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  progresValue:number;
  rangeArray:number[];
  constructor() { 
    this.progresValue =0;
    this.rangeArray= new Array(100);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    var h = document.documentElement, 
        b = document.body,
        scrollTop = 'scrollTop',
        scrollHeight = 'scrollHeight';
        this.progresValue = (h[scrollTop]||b[scrollTop]) / ((h[scrollHeight]||b[scrollHeight]) - h.clientHeight) * 100;
  }
  ngOnInit() {
  }
}
