import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantdataComponent } from './merchantdata.component';

describe('MerchantdataComponent', () => {
  let component: MerchantdataComponent;
  let fixture: ComponentFixture<MerchantdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
