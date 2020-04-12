import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContagemComponent } from './list-contagem.component';

describe('ListContagemComponent', () => {
  let component: ListContagemComponent;
  let fixture: ComponentFixture<ListContagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
