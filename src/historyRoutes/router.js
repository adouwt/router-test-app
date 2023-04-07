import { useEffect, useState, createContext, useContext } from "react";

const RouterContext = createContext();
const HistoryContext = createContext({});
const BrowserRouter = (props) => {

    const [path, setPath] = useState(() => {
        const {pathname} = window.location
        return pathname || '/'
    });

    useEffect(()=>{
        window.addEventListener('popstate', handlePopstate);
        return () => {
            window.removeEventListener('popstate', handlePopstate)
        }
    },[])

    const handlePopstate = (event) => {
        const {pathname} = window.location;
        setPath(pathname)
    }

    // 封装给UI 跳转的方法
  const push = function(path) {
    setPath(path);
    window.history.pushState({path}, null, path);
  }

  const goBack = function() {
    window.history.go(-1);
  }

  return (
      <>
          <RouterContext.Provider value={{path}}>
              <HistoryContext.Provider value={{
                  push,
                  goBack
              }}>
                  {props.children}
              </HistoryContext.Provider>
          </RouterContext.Provider>
      </>
      
    );
}

export default BrowserRouter


export function Route(props) {
    const {component: Component, path: componentPath} = props;
    
    return (
      <RouterContext.Consumer>
        {({path}) => {
          return componentPath === path ? <Component /> : null;
        }}
      </RouterContext.Consumer>
    );
}

export {
  RouterContext,
  HistoryContext
}



export function Link(props) {
  const {to, children} = props;

  const push = function() {
    // todo：页面跳转 且 不刷新
    window.history.pushState({path: to}, null, to);
    window.location.reload()
  }

  const goBack = function() {
    window.history.go(-1);
  }

  return <HistoryContext.Provider value={{
        push,
        goBack
    }}>
        <a href="javascript: void(0)" onClick={push}>{children}</a>
    </HistoryContext.Provider>
}

export function NavLink(props) {




}