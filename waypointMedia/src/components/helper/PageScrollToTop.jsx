import { useEffect } from "react";
import { useLocation } from "react-router";

export function PageScrollToTop(){
    // SCROLLS TO TOP OF PAGE AFTER NAVIGATION 
    const {pathname} = useLocation()

    useEffect(()=>{
        window.scrollTo(0, 0);

    },[pathname])

    return null;

}