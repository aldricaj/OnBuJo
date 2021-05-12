export class Bullet {
    bulletText: string;
    id: string;
    pageNumber: number;
    parentId?: string;

    constructor(_id:string, _bulletText:string, _pageNumber:number, _parentId?:string) {
        this.id = _id;
        this.bulletText = _bulletText;
        this.pageNumber = _pageNumber;
        if (_parentId){
            this.parentId = _parentId;
        }
    }

    getParent(): Bullet {
        return new Bullet("0","0",0);
    }
}