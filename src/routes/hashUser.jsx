import { useContext } from "react";
import {HashContext} from '../hashRoutes/router'
const User = () => {
    const HashContextAPI = useContext(HashContext);
    const {push, goBack} = HashContextAPI;
    return <div>
        <h3>user</h3>
        <button onClick={() => push('#about')}>about</button>
        <button onClick={() => goBack()}>back </button>
    </div>
}

export default User