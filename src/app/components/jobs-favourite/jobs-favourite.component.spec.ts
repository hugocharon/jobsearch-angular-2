import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFavouriteComponent } from './jobs-favourite.component';

describe('JobsFavouriteComponent', () => {
  let component: JobsFavouriteComponent;
  let fixture: ComponentFixture<JobsFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsFavouriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobsFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
