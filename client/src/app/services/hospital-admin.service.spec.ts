import { TestBed, inject } from '@angular/core/testing';

import { HospitalAdminService } from './hospital-admin.service';

describe('HospitalAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HospitalAdminService]
    });
  });

  it('should be created', inject([HospitalAdminService], (service: HospitalAdminService) => {
    expect(service).toBeTruthy();
  }));
});
