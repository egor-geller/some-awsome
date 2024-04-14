import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./categorie-list.pipe";
import { MediaItemFormComponent } from "./media-item-form.component";
import { lookupListToken, lookupLists } from "./providers";
import { MockXHRBackend } from "./mock-xhr-backend";

@NgModule({
	declarations: [
		AppComponent,
		MediaItemComponent,
		MediaItemListComponent,
		FavoriteDirective,
		CategoryListPipe,
		MediaItemFormComponent,
	],
	imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
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
