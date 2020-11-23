import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WishesPagePage } from './wishes-page.page';

describe('WishesPagePage', () => {
  let component: WishesPagePage;
  let fixture: ComponentFixture<WishesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WishesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
