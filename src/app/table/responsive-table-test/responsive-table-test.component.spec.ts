import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTableTestComponent } from './responsive-table-test.component';

describe('ResponsiveTableTestComponent', () => {
  let component: ResponsiveTableTestComponent;
  let fixture: ComponentFixture<ResponsiveTableTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveTableTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
