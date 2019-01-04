import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinivariantComponent } from './minivariant.component';

describe('MinivariantComponent', () => {
  let component: MinivariantComponent;
  let fixture: ComponentFixture<MinivariantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinivariantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinivariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
