import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SearchBarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should contain input element', () => {
    const element = fixture.nativeElement.querySelector('input');
    expect(element).toBeTruthy();
    expect(element.placeholder).toContain('search');
  });
});
