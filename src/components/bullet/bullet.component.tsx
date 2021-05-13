import React from "react";
import { Component } from "react";
import { Bullet } from "../../models/Bullet";
import "./bullet.css";

export class BulletComponentProps {
    bullet: Bullet;
    key:string;
    constructor(_bullet:Bullet, _key:string) {
        this.bullet = _bullet;
        this.key = _key;
    }
}
class BulletComponentState {
}

export class BulletComponent extends Component<BulletComponentProps, BulletComponentState> {
    bullet: Bullet;
    constructor(props: BulletComponentProps) {
        super(props);
        this.bullet = props.bullet;
    }

    render() {
        return <li className="bullet">
                <p>{this.bullet.bulletText}</p>
            </li>
            
    }
}