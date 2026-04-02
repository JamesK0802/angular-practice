import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExample } from './card-example';

describe('CardExample', () => {
  let component: CardExample;
  let fixture: ComponentFixture<CardExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExample],
    }).compileComponents();

    fixture = TestBed.createComponent(CardExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
