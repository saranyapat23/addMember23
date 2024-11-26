import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowPage } from './show.page';

describe('ShowPage', () => {
  let component: ShowPage;
  let fixture: ComponentFixture<ShowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
