import { Pipe, PipeTransform } from "@angular/core";
import { UserModel } from "../models/user.model";

@Pipe({
	name: "userFilter",
})
export class UserFilterPipe implements PipeTransform {
	transform(items: UserModel[], searchText: string, center: number): UserModel[] {
		if (searchText != "") {
			return items.filter((res) => {
				searchText = searchText
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "")
					.toLocaleLowerCase();
				let lname: string = res.lname
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "")
					.toLocaleLowerCase();
				let fname: string = res.name
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "")
					.toLocaleLowerCase();
				let fullname: string = fname + " " + lname;
				let fullnamer: string = lname + " " + fname;
				if (center == 0) {
					return fullname.includes(searchText) || fullnamer.includes(searchText);
				} else {
					return (fullname.includes(searchText) || fullnamer.includes(searchText)) && (res.center_id == center || res.center_id == 3);
				}
			});
		} else {
			return items.filter((res) => {
				if (center == 0) {
					return res;
				} else {
					return res.center_id === center || res.center_id === 3;
				}
			});
		}
	}
}
