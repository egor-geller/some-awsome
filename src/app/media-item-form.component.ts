import { Component, OnInit, Inject } from "@angular/core";
import {
	FormGroup,
	FormControl,
	Validators,
	ValidatorFn,
	ValidationErrors,
	FormBuilder,
} from "@angular/forms";
import { MediaItemService } from "./media-item.service";
import { lookupListToken } from "./providers";

@Component({
	selector: "mw-media-item-form",
	templateUrl: "./media-item-form.component.html",
	styleUrl: "./media-item-form.component.css",
})
export class MediaItemFormComponent implements OnInit {
	form: any;

	constructor(
		private formBuilder: FormBuilder,
		private mediaItemService: MediaItemService,
		@Inject(lookupListToken) public lookupLists: any
	) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			medium: this.formBuilder.control("Movies"),
			name: this.formBuilder.control(
				"",
				Validators.compose([
					Validators.required,
					Validators.pattern("[\\w\\-\\s\\/]+"),
				])
			),
			category: this.formBuilder.control(""),
			year: this.formBuilder.control(
				"",
				this.yearValudator as ValidatorFn
			),
		});
	}

	yearValudator(control: FormControl): ValidationErrors | null {
		if (control.value.trim().length === 0) {
			return null;
		}

		const year = parseInt(control.value, 10);
		const minYear = 1900;
		const maxYear = 2100;
		if (year >= minYear && year <= maxYear) {
			return null;
		}
		return {
			year: {
				min: minYear,
				max: maxYear,
			},
		};
	}

	onSubmit(mediaItem: any) {
		console.log(mediaItem);
		this.mediaItemService.add(mediaItem)
	}
}
