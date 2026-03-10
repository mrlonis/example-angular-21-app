import { TestBed } from '@angular/core/testing';
import { DefaultComponent } from './default.component';

describe('DefaultComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultComponent],
    }).compileComponents();
  });

  it('should create the DefaultComponent', () => {
    const fixture = TestBed.createComponent(DefaultComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(DefaultComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, example-angular-21-app');
  });
});
