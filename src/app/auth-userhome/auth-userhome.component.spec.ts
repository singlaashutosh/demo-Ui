import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserhomeComponent } from './auth-userhome.component';

describe('AuthUserhomeComponent', () => {
  let component: AuthUserhomeComponent;
  let fixture: ComponentFixture<AuthUserhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthUserhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
