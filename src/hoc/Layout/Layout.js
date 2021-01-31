import React, { Component } from "react";
import classes from "./Layout.css";

export default class Layout extends Component {
    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
    // }
    render() {
        return (
            <div className={classes.Layout}>
                <main>{this.props.children}</main>
            </div>
        );
    }
}
