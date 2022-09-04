import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
	declarations: [NotFoundComponent],
	exports: [NotFoundComponent],
	imports: [CommonModule],
})
export class ErrorsModule {}
