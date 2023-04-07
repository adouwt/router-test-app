import React, {useContext} from "react";

import { HistoryContext, RouterContext } from "../historyRoutes/router";
const Home = () => {
    const historyContextAPi = useContext(HistoryContext)
    const {push, goBack} = historyContextAPi

    return <div>
        <h3>home</h3>
        <button onClick={() => push('/about')}>push</button>
        <button onClick={() => goBack()}>gpback</button>
    </div>
}

export default Home