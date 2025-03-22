import { useEffect, useState } from "react";
import useOnlineStatus from "./useOnlineStatus";

const useRestauratnMenu = (resId) => {
    // fetch data
    const [restInfo, setRestInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&query=North%20Indian`)
    
        const json = await data.json();

        setRestInfo(json.data);
    }

    return restInfo;
}

export default useRestauratnMenu;