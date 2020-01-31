import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UttarakhandtourismComponent } from './uttarakhandtourism.component';

describe('UttarakhandtourismComponent', () => {
  let component: UttarakhandtourismComponent;
  let fixture: ComponentFixture<UttarakhandtourismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UttarakhandtourismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UttarakhandtourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
