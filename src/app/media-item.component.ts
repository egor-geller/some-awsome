import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "mw-media-item",
	templateUrl: "./media-item.component.html",
	styleUrl: "./media-item.component.css",
})
export class MediaItemComponent {
	@Input() mediaItem: any;
    @Output() delete = new EventEmitter();

	onDelete() {
		console.log("deleted");
        this.delete.emit(this.mediaItem);
	}
}
