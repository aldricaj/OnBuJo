export class Page {
    pageNumber: number;
    title: string;
    collectionId: string;

    constructor(_pageNumber:number, _title:string, _collectionId:string) {
        this.pageNumber = _pageNumber;
        this.title = _title;
        this.collectionId = _collectionId
    }
}