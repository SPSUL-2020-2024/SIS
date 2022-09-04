import { OverlayModule } from "./../../../core/components/overlay/overlay.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainDashboardComponent } from "./components/main-dashboard/main-dashboard.component";
import { NzEmptyModule } from "ng-zorro-antd/empty";

@NgModule({
	declarations: [MainDashboardComponent],
	imports: [CommonModule, NzEmptyModule, OverlayModule],
})
export class HomeModule {}
