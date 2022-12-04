export interface PostModel {
	id: number;
	title: string;
	text: string;
	priority: number;
	center_id: number;
	user_id: number;
	date: Date;
	files: any;
}
