import React from "react";

type ListOfColorsProp = {

    title: string,
    arrayOfColors: string[]
    backgroundColor ?: string;

}

const ListOfColors = (props: ListOfColorsProp) => {


    return (
        <div className="listOfColors">
            <h2>{props.title}</h2>
{props.arrayOfColors.map((color) => {
    return (
        <h3>{color}</h3>
    )
})}
        </div>
    )

}

export default ListOfColors