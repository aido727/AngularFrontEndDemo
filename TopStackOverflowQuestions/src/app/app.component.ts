import { Component, Pipe } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Question } from './models/stackoverflow.model';
import { StackOverflowService } from './services/stackoverflow.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	// normally wouldn't use app.component directly like I have but it is a single pager and not wanting to waste the time
	// - it would usually act more as a container for other components, like the absolutely top level template, as well as using angular routing which I also did not use in this project for the same reasons
	
	questionCount: number = 10;
	pageCount: number = 5;
	title = 'Top ' + this.questionCount + ' StackOverflow Questions';
	questions: Question[] = [];
	
	constructor(private titleService: Title,
				private stackoverflowService: StackOverflowService)
	{
		this.titleService.setTitle("Top " + this.questionCount + " StackOverflow Questions");
	}

	ngOnInit()
	{
		this.stackoverflowService.getTopQuestions(this.questionCount).subscribe((result) => {
			this.questions = result.items;
		})
	}

	public getQuestions(page: number) : Question[]
	{
		return this.questions.slice(0+(this.pageCount*(page-1)),this.pageCount*page);
	}
}
