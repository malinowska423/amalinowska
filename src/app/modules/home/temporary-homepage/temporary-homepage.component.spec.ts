import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TemporaryHomepageComponent} from './temporary-homepage.component';

describe('TemporaryHomepageComponent', () => {
  let component: TemporaryHomepageComponent;
  let fixture: ComponentFixture<TemporaryHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemporaryHomepageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
