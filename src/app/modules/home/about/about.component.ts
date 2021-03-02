import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  movePhoto(e): void {
    console.log(e);
  }

  @HostListener('window:scroll', ['$event'])
  private onScroll($event: Event): void {
    const wrap = document.getElementById('about-wrapper');
    const top = -1 * Math.floor(wrap.getBoundingClientRect().top - 150);
    document.getElementById('about-photo').style.transform
      = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + top + ', 0, 1)';
  }

}
