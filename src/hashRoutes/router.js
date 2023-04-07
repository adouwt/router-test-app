import React, { createContext, useState, useEffect } from "react";
const RouteContext = createContext({})
const HashContext =  createContext({})
const HashRouter = (props) => {
    const [hash, setHash] = useState(() => {
        const { hash } = window.location
        return hash
    })

    useEffect(() => {
        window.addEventListener('hashchange', hashChange)
        return () => {
            window.removeEventListener('hashchange', hashChange)
        };
    }, []);
    const hashChange = (event) => {
        console.log(event);
        const { hash } = window.location
        setHash(hash)
    }
    const push =(hash) => {
        window.location.hash = hash
    }
    const goBack = () => {
        window.history.back()
    }
    return (
        <RouteContext.Provider value={hash}>
            <HashContext.Provider value={{
                push,
                goBack
            }}>
                {props.children}
            </HashContext.Provider>
        </RouteContext.Provider>
    )
}

export function HashRoute(props) {
    const {path, component: Component} = props;
    return (
        <RouteContext.Consumer>
            {(hashItem) => {
                return path === hashItem ? <Component/>: null
            }}
        </RouteContext.Consumer>
    )

}

export default HashRouter


export {
    RouteContext,
    HashContext
}