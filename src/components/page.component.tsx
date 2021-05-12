import React from "react";
import { Component } from "react";
import { Bullet } from "../models/Bullet";
import { Page } from "../models/Page";
import { BulletService } from "../services/bullet.service";
import { BulletComponent } from "./bullet.component";
import "./page.css"

class PageComponentProps {
    page: Page;
    constructor(_page:Page){
        this.page = _page;
    }
}
class PageComponentState {
    bullets:Array<Bullet> = [];
}

export class PageComponent extends Component<PageComponentProps, PageComponentState> {
    page:Page;

    constructor(props: PageComponentProps) {
        super(props);
        this.page = props.page;
        this.state = new PageComponentState();
    }
    
    componentDidMount() {
        let bulletService = new BulletService();
        bulletService.GetAllBullets().then((bullets: Array<Bullet>) => {
            this.setState({bullets:bullets});
        });
    }

    render() {
        const listItems = this.state.bullets.map((bullet: Bullet) => {
                console.log(bullet);
                return <li key={bullet.id}>{bullet.bulletText}</li>
            })

        return (
            <div>
                <h3>{this.page.title}</h3>
                <p>pg. {this.page.pageNumber}</p>
                <ul className="page">
                    {
                        this.state.bullets.map((bullet:Bullet)=>{
                            return <BulletComponent key={bullet.id} bullet={bullet} />
                        })
                    }
                </ul>
            </div>
        )
    }
}