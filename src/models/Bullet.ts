export class Bullet {
    bulletText: string;
    id: string;
    pageNumber: number;
    parentId?: string;
    type: string;
    hasStatus:boolean;
    defaultSymbol: string;

    constructor(_id:string, _bulletText:string, _pageNumber:number, _type:string, _hasStatus:boolean, _defaultSymbol:string, _parentId?:string) {
        this.id = _id;
        this.bulletText = _bulletText;
        this.pageNumber = _pageNumber;
        this.type = _type;
        this.hasStatus = _hasStatus;
        this.defaultSymbol = _defaultSymbol;
        if (_parentId){
            this.parentId = _parentId;
        }
    }

    getParent(): Bullet {
        return new Bullet("0","0",0,"",false,"");
    }
}