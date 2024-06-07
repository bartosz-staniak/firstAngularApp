import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'firstAngularApp' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('firstAngularApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, firstAngularApp');
  });

  it(`should have the 'Testing a new component variable' about variable`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.about).toEqual('Testing a new component variable');
  })

  it('should render "about" component property (hardcoded expectation)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('Testing a new component variable');
  });

  it('should render "about" component property (component expectation)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;
    expect(compiled.querySelector('span')?.textContent).toContain(app.about);
  });

  it('should render "about" component property (hybrid expectations)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const app = fixture.componentInstance;
    expect(compiled.querySelector('span')?.textContent).toContain('Testing a new component variable');
    expect(compiled.querySelector('span')?.textContent).toContain(app.about);
  });

  it('should have a div present', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect (compiled.querySelector('div')?.hidden).toBe(false);
  })

  it('should have a left-side div present WIP', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    //expect (compiled.classList.contains('left-side')).toBe(true);
    expect(document.getElementsByClassName('left-side'));
  })

  it('should have an h2 heading present', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect (compiled.querySelector('h2')?.hidden).toBe(false);
  })

  it('should have a paragraph present', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect (compiled.querySelector('p')?.hidden).toBe(false);
  })

  it('should have an h2 heading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect (compiled.querySelector('h2')?.textContent)
    .toContain('g, t');
  })

  it('should have a new heading', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const headingElement : HTMLElement = fixture.nativeElement;
    const bodyHeading = headingElement.querySelector('h2')!;
    expect(bodyHeading?.textContent).toEqual('Testing, testing...');
  })
});
