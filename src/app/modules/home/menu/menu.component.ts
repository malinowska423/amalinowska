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
  width = 0;
  menuPosition: any;

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
    this.width = window.innerWidth;
    this.isMenuOpened = window.innerWidth > 1280;
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
