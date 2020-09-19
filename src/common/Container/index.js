import React from "react";
import {Main} from "./styled"

const Container = (props) => (
    <Main>
        {props.children}
    </Main>
);
export default Container;