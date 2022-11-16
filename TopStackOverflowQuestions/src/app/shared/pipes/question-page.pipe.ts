import { Pipe, PipeTransform } from "@angular/core";
import { Question } from "src/app/models/stackoverflow.model";

@Pipe({ name: 'questionPage' })
export class QuestionPagePipe implements PipeTransform {
	transform(value: Question[], pages: string) {
		let split = pages.split(".");
		let page: number = parseInt(split[0]);
		let pageCount: number  = parseInt(split[1]);
		let startIndex: number = (page-1)*pageCount;
		return value.slice(startIndex, startIndex+pageCount);
	}
}