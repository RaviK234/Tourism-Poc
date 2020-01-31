import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GujarattourismComponent } from './gujarattourism.component';

describe('GujarattourismComponent', () => {
  let component: GujarattourismComponent;
  let fixture: ComponentFixture<GujarattourismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GujarattourismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GujarattourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
