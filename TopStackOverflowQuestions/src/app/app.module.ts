import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertComponent } from './elements/advert/advert.component';
import { HeaderComponent } from './elements/header/header.component';
import { QuestionComponent } from './elements/question/question.component';
import { StackOverflowService } from './services/stackoverflow.service';
import { QuestionPagePipe } from './shared/pipes/question-page.pipe';
import { ViewsCounterPipe } from './shared/pipes/views-counter.pipe';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		QuestionComponent,
		AdvertComponent,
		ViewsCounterPipe,
		QuestionPagePipe
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [StackOverflowService],
	bootstrap: [AppComponent]
})
export class AppModule { }
