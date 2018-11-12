import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRedirectComponent } from './index-redirect.component';

describe('IndexRedirectComponent', () => {
  let component: IndexRedirectComponent;
  let fixture: ComponentFixture<IndexRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
