import { HttpClient } from '@angular/common/http';
import { StackOverflowService } from './stackoverflow.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StackOverflowService', () => {

	let service: StackOverflowService;
	beforeEach(() => { service = new StackOverflowService(<unknown>HttpClientTestingModule as HttpClient); });
	
	// tests

	it('should create', () => {
		expect(service).toBeTruthy();
	});
});
