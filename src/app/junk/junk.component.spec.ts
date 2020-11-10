import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunkComponent } from './junk.component';

describe('JunkComponent', () => {
  let component: JunkComponent;
  let fixture: ComponentFixture<JunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
