import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePhaseComponent } from './game-phase.component';

describe('GamePhaseComponent', () => {
  let component: GamePhaseComponent;
  let fixture: ComponentFixture<GamePhaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePhaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
