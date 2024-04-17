import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardsComponent } from './pokemon-cards.component';

// import {TestbedHarnessEnvironment, } from '@angular/cdk/testing'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

describe('PokemonCardsComponent', () => {
  let component: PokemonCardsComponent;
  let fixture: ComponentFixture<PokemonCardsComponent>;
  // let loader: HarnessLoader;
  // let rootLoader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardsComponent, MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // loader = TestbedHarnessEnvironment.loader(fixture);
    // rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain div element with pokemon cards', () => {
    const divElement = fixture.nativeElement.querySelector('.cards-container');
    const h1Element = fixture.nativeElement.querySelector('h1');
    console.log(h1Element);
    expect(divElement).toBeTruthy();
    expect(h1Element.textContent).toContain("All Pokemon");
  });


// it('loads harnesses', async () => {
//   // Load a harness for the bootstrapped component with `harnessForFixture`
//   dialogButtonHarness =
//       await TestbedHarnessEnvironment.harnessForFixture(fixture, MyDialogButtonHarness);

//   // The button element is inside the fixture's root element, so we use `loader`.
//   const buttonHarness = await loader.getHarness(MyButtonHarness);

//   // Click the button to open the dialog
//   await buttonHarness.click();

//   // The dialog is appended to `document.body`, outside of the fixture's root element,
//   // so we use `rootLoader` in this case.
//   const dialogHarness = await rootLoader.getHarness(MyDialogHarness);

//   // ... make some assertions
// });
});
