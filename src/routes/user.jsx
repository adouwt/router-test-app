import { useContext } from "react";
import {HistoryContext} from '../historyRoutes/router'
const User = () => {
    const HistoryContextAPI = useContext(HistoryContext);
    const {push, goBack} = HistoryContextAPI;
    return <div>
        <h3>user</h3>
        <button onClick={() => push('/about')}>about</button>
        <button onClick={() => goBack()}>back </button>
    </div>
}

export default User