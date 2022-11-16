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
            <div className={'Section'}>
                <p className={"Section-title"}>{props.title}</p>
                <p>{props.para1}</p>
                <img src={props.image} className={"section-image-default"} alt={props.imageName} />
                <p>{props.para2}</p>
            </div>
    );
}