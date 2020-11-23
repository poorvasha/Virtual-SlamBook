import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForeverPage } from './forever.page';

describe('ForeverPage', () => {
  let component: ForeverPage;
  let fixture: ComponentFixture<ForeverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForeverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
