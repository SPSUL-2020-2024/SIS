import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingDataComponent } from "./components/loading-data/loading-data.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	declarations: [LoadingDataComponent],
	imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
	exports: [LoadingDataComponent],
})
export class SharedModule {}
