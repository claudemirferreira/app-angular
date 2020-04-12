import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLancamentoComponent } from './list-lancamento.component';

describe('ListLancamentoComponent', () => {
  let component: ListLancamentoComponent;
  let fixture: ComponentFixture<ListLancamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLancamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
