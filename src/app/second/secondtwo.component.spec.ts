import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtwoComponent } from './secondtwo.component';

describe('SecondtwoComponent', () => {
  let component: SecondtwoComponent;
  let fixture: ComponentFixture<SecondtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
