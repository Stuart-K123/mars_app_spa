import React from "react";
import '../App.css';

interface _props {
    title: string,
    para1: string,
    para2: string,
    imageName: string,
    image: string,
}

export function Section(props: _props) {
        return (
            <div>
                <p className={"App-title"}>{props.title}</p>
                <p>{props.para1}</p>
                <img src={props.image} alt={props.imageName} />
                <p>{props.para2}</p>
            </div>
    );
}