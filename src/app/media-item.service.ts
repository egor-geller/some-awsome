import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError, throwError } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class MediaItemService {
	constructor(private http: HttpClient) {}

	get(medium: string) {
		const getOptions = {
			params: {
				medium,
			},
		};
		return this.http.get<MediaItemResponse>("mediaitems", getOptions).pipe(
			map(response => {
				return response.mediaItems;
			}),
			catchError(this.handleError)
		);
	}

	add(mediaItem: any) {
		return this.http
			.post("mediaitems", mediaItem)
			.pipe(catchError(this.handleError));
	}

	delete(mediaItem: any) {
		return this.http
			.delete(`meidiaitems/${mediaItem.id}`)
			.pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		console.log(error.message);
		return throwError(
			() => new Error("A data error occurred, please try again")
		);
	}
}

interface MediaItemResponse {
	mediaItems: MediaItem[];
}

export interface MediaItem {
	id: number;
	name: string;
	medium: string;
	category: string;
	year: number;
	watchedOn: number;
	isFavorite: number;
}
