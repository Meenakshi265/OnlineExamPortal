import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboradComponent } from './userdashborad.component';

describe('UserdashboradComponent', () => {
  let component: UserdashboradComponent;
  let fixture: ComponentFixture<UserdashboradComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdashboradComponent]
    });
    fixture = TestBed.createComponent(UserdashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
