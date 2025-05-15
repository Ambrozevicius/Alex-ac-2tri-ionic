import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaResultadoPage } from './tela-resultado.page';

describe('TelaResultadoPage', () => {
  let component: TelaResultadoPage;
  let fixture: ComponentFixture<TelaResultadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaResultadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
