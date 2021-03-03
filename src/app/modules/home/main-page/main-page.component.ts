import {Component, OnInit} from '@angular/core';
import {SimpleSmoothScrollService} from 'ng2-simple-smooth-scroll';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private scroll: SimpleSmoothScrollService, private router: Router) {
  }

  ngOnInit(): void {
    this.scroll.smoothScrollToAnchor();
  }

}
