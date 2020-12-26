import { ReactNode, createElement } from "react";
import { RandomColourDisplay } from "./components/RandomColourDisplayComponent";
import { hot } from "react-hot-loader/root";
import { RandomColourDisplayContainerProps } from "../typings/RandomColourDisplayProps";

import "./ui/RandomColourDisplay.css";

const RandomColourDisplayContainer = (props: RandomColourDisplayContainerProps): ReactNode => {
    console.log (props)
    let value:string = props.Value.displayValue

    return (<RandomColourDisplay value={value} colour={props.Colour} />)
}

export default hot(RandomColourDisplayContainer);
