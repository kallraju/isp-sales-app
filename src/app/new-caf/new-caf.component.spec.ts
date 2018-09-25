import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NEWCAFComponent } from './new-caf.component';

describe('NEWCAFComponent', () => {
  let component: NEWCAFComponent;
  let fixture: ComponentFixture<NEWCAFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NEWCAFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NEWCAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
