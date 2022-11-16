import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'viewsCounter' })
export class ViewsCounterPipe implements PipeTransform {
	transform(value: number) {
		if(Number.isNaN(value))
		{
			return null;
		}

		if(value >= 1000000)
		{
			return parseFloat((value/1000000).toString()).toFixed(1) + "m";
		}

		let nf = new Intl.NumberFormat('en-US');
		return nf.format(value);
	}
}