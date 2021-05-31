import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaBgclassComponent } from './diretiva-bgclass.component';

describe('DiretivaBgclassComponent', () => {
  let component: DiretivaBgclassComponent;
  let fixture: ComponentFixture<DiretivaBgclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaBgclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaBgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
