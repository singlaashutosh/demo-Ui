import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthContactusComponent } from './auth-contactus.component';

describe('AuthContactusComponent', () => {
  let component: AuthContactusComponent;
  let fixture: ComponentFixture<AuthContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
