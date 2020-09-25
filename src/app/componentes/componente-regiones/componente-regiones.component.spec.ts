import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRegionesComponent } from './componente-regiones.component';

describe('ComponenteRegionesComponent', () => {
  let component: ComponenteRegionesComponent;
  let fixture: ComponentFixture<ComponenteRegionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteRegionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteRegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
