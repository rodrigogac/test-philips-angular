import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListsComponent } from './game-lists.component';

describe('GameListsComponent', () => {
  let component: GameListsComponent;
  let fixture: ComponentFixture<GameListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
