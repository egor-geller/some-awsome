import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MediaItemService, MediaItem } from "./media-item.service";

@Component({
	selector: "mw-media-item-list",
	templateUrl: "./media-item-list.component.html",
	styleUrl: "./media-item-list.component.css",
})
export class MediaItemListComponent implements OnInit {
	medium = "";
	mediaItems: MediaItem[] = [];

	constructor(
		private mediaItemService: MediaItemService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe(paramMap => {
			let medium = paramMap.get("medium");
			if (!medium || medium.toLowerCase() === "all") {
				medium = "";
			}
			this.getMediaItems(medium);
		});
	}

	onMediaItemDelete(mediaItem: any) {
		this.mediaItemService.delete(mediaItem).subscribe(() => {
			this.getMediaItems(this.medium);
		});
	}

	getMediaItems(medium: string) {
		this.mediaItemService.get(medium).subscribe(mediaItems => {
			this.mediaItems = mediaItems;
		});
	}
}
