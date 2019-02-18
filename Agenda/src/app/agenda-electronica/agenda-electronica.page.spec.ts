import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaElectronicaPage } from './agenda-electronica.page';

describe('AgendaElectronicaPage', () => {
  let component: AgendaElectronicaPage;
  let fixture: ComponentFixture<AgendaElectronicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaElectronicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaElectronicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
