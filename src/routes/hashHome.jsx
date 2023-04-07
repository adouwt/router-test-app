import React, {useContext} from "react";

import { HashContext, RouterContext } from "../hashRoutes/router";
const Home = () => {
    const HashContextAPI = useContext(HashContext)
    const {push, goBack} = HashContextAPI

    return <div>
        <h3>home</h3>
        <button onClick={() => push('#about')}>push</button>
        <button onClick={() => goBack()}>go back</button>
    </div>
}

export default Home