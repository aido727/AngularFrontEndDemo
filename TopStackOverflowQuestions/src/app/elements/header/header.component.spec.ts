import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
		declarations: [
			HeaderComponent
		],
		imports: [

		]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(HeaderComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
