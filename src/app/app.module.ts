import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./categorie-list.pipe";
import { lookupListToken, lookupLists } from "./providers";
import { MockXHRBackend } from "./mock-xhr-backend";
import { routing } from "./app.routing";

@NgModule({
	declarations: [
		AppComponent,
		MediaItemComponent,
		MediaItemListComponent,
		FavoriteDirective,
		CategoryListPipe,
	],
	imports: [BrowserModule, HttpClientModule, routing],
	bootstrap: [AppComponent],
	providers: [
		{
			provide: lookupListToken,
			useValue: lookupLists,
		},
		{
			provide: HttpXhrBackend,
			useClass: MockXHRBackend,
		},
	],
})
export class AppModule {}
