import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsComponent } from './columns.component';

describe('ColumnsComponent', () => {
  let component: ColumnsComponent;
  let fixture: ComponentFixture<ColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
