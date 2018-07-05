import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpTypeComponent } from './ip-type.component';

describe('IpTypeComponent', () => {
  let component: IpTypeComponent;
  let fixture: ComponentFixture<IpTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
