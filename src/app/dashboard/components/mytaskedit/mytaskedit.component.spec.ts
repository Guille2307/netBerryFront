import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytaskeditComponent } from './mytaskedit.component';

describe('MytaskeditComponent', () => {
  let component: MytaskeditComponent;
  let fixture: ComponentFixture<MytaskeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytaskeditComponent]
    });
    fixture = TestBed.createComponent(MytaskeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
