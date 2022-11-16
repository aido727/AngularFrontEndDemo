import { Component, Input } from '@angular/core';
import { Question } from 'src/app/models/stackoverflow.model';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.css']
})

export class QuestionComponent {
	
	@Input() question: Question;
	@Input() index: number;
	
	constructor() {}

	ngOnInit() {}

	public htmlDecode(input: string) {
		var doc = new DOMParser().parseFromString(input, "text/html");
		return doc.documentElement.textContent;
	}

	public openLink() {
		let w = window.open(this.question.link, '_blank')
		if(w)
		{
			w.focus();
		}
	}
}
