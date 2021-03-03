import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  @Input() size = 14;
  @Input() vertical = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.classList += this.vertical ? ' vertical' : ' horizontal';
    const div = this.el.nativeElement.children[0];
    const icons = div.children.length;
    div.style.fontSize = this.size + 'px';
    if (this.vertical) {
      div.style.height = (this.size * 1.3 * icons) + 'px';
    } else {
      div.style.width = (this.size * 1.3 * icons) + 'px';
    }
  }

}
