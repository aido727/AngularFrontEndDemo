import { TestBed } from '@angular/core/testing';
import { AdvertComponent } from './advert.component';

describe('AdvertComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
		declarations: [
			AdvertComponent
		],
		imports: [

		]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AdvertComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
