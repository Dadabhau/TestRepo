import { Component, OnInit } from "@angular/core";
import { SubdivisionDataService } from "../services/subdivision-data.service";

@Component({
  selector: "app-subdivision-data-display",
  templateUrl: "./subdivision-data-display.component.html",
  styleUrls: ["./subdivision-data-display.component.css"],
})
export class SubdivisionDataDisplayComponent implements OnInit {
  alldata: any;
  selectedCategory = "";
  constructor(private SubdivisionDataService: SubdivisionDataService) {}

  ngOnInit(): void {
    this.SubdivisionDataService.getData().subscribe((data) => {
      console.log(data.subdivisions);
      this.alldata = data.subdivisions;
    });
  }
  get filteredItems() {
    if (!this.selectedCategory) {
      return this.alldata;
    } else {
      return this.alldata.filter(
        (item: any) => item.subdivisionStatusCode === this.selectedCategory
      );
    }
  }
}
