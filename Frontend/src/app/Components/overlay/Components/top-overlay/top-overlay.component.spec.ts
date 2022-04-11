import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOverlayComponent } from './top-overlay.component';

describe('TopOverlayComponent', () => {
  let component: TopOverlayComponent;
  let fixture: ComponentFixture<TopOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
