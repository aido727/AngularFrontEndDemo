import { TestBed } from '@angular/core/testing';
import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
		declarations: [
			QuestionComponent
		],
		imports: [

		]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(QuestionComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	// more tests here would be quite possible, skipped for time
});
