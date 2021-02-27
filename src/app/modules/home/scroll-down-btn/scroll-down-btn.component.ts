import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-down-btn',
  templateUrl: './scroll-down-btn.component.html',
  styleUrls: ['./scroll-down-btn.component.scss']
})
export class ScrollDownBtnComponent implements OnInit {

  @Input() fragment: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  scroll(fragment: string) {
    const el = document.getElementById(fragment);
    el.scrollIntoView();
  }

}
