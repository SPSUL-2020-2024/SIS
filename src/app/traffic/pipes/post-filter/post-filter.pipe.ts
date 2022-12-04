import { PostModel } from "./../../models/post.model";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "postFilter",
})
export class PostFilterPipe implements PipeTransform {
	transform(items: PostModel[], center: number): PostModel[] {
		return items.filter((res) => {
			if (center == 0) {
				return res;
			} else {
				return res.center_id === center || res.center_id === 3;
			}
		});
	}
}
