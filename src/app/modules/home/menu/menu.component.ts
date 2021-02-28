import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @ViewChild('stickyMenu') menu: ElementRef;

  isMenuOpened = false;
  sticky = false;
  menuPosition: any;
  margin = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkWindowSize();
  }

  openMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  checkWindowSize() {
    const width = window.innerWidth;
    this.isMenuOpened = width > 960;
    if (width > 1280) {
      this.margin = (width - 1280) / 2;
      if (this.margin > 300) {
        this.margin = 300;
      }
    } else {
      this.margin = 30;
    }
  }

  ngAfterViewInit() {
    this.menuPosition = this.menu.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    this.sticky = windowScroll >= this.menuPosition;
  }
}
