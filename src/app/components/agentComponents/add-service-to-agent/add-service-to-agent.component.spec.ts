import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceToAgentComponent } from './add-service-to-agent.component';

describe('AddServiceToAgentComponent', () => {
  let component: AddServiceToAgentComponent;
  let fixture: ComponentFixture<AddServiceToAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceToAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiceToAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
