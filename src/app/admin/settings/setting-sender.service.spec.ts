import { TestBed, inject } from '@angular/core/testing';

import { SettingSenderService } from './setting-sender.service';

describe('SettingSenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingSenderService]
    });
  });

  it('should be created', inject([SettingSenderService], (service: SettingSenderService) => {
    expect(service).toBeTruthy();
  }));
});
