import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAFStatusComponent } from './caf-status.component';

describe('CAFStatusComponent', () => {
  let component: CAFStatusComponent;
  let fixture: ComponentFixture<CAFStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAFStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAFStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
