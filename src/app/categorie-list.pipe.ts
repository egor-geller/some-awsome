import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "categoryList"
})
export class CategoryListPipe implements PipeTransform {
    transform(mediaItems: any) {
        const categories: Array<Object> = [];
        mediaItems.forEach((mediaItem: { category: Object; }) => {
            if(categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category)
            }
        });
        return categories.join(", ");
    }
}