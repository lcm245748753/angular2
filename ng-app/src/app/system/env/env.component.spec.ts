import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEnvComponent } from './env.component';

describe('SystemEnvComponent', () => {
  let component: SystemEnvComponent;
  let fixture: ComponentFixture<SystemEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
