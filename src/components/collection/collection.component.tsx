import React from "react";
import { Component } from "react";
import { Collection } from "../../models/Collection";
import { Page } from "../../models/Page";
import { PageService } from "../../services/page.service";
import "./collection.css"
import { PageComponent } from "../page/page.component";

class CollectionComponentProps {
    collection: Collection;
    constructor(_collection:Collection){
        this.collection = _collection;
    }
}
class CollectionComponentState {
    pages:Array<Page> = [];
}

export class CollectionComponent extends Component<CollectionComponentProps, CollectionComponentState> {
    collection:Collection;

    constructor(props: CollectionComponentProps) {
        super(props);
        this.collection = props.collection;
        this.state = new CollectionComponentState();
    }
    
    componentDidMount() {
        let pageService = new PageService();
        pageService.GetPagesForCollection(this.collection.id).then((pages: Array<Page>) => {
            this.setState({pages:pages});
        });
    }

    render() {

        return (
            <div className="collection">
                <h2>{this.collection.title}</h2>
                <ul className="page-list">
                    {
                        this.state.pages.map((_page: Page) => {
                            return <li className="page-item" key={_page.pageNumber}><PageComponent page={_page} /></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}