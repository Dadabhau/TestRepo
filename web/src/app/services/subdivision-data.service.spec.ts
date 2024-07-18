import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SubdivisionDataService } from "./subdivision-data.service";

describe("SubdivisionDataService", () => {
  let service: SubdivisionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [service],
    });
    service = TestBed.inject(SubdivisionDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
