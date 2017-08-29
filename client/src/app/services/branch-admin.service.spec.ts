import { TestBed, inject } from '@angular/core/testing';

import { BranchAdminService } from './branch-admin.service';

describe('BranchAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BranchAdminService]
    });
  });

  it('should be created', inject([BranchAdminService], (service: BranchAdminService) => {
    expect(service).toBeTruthy();
  }));
});
