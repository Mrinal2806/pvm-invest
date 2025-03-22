import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestauratnMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {


// const  [restInfo, setRestInfo] = useState(null)
const {resId} = useParams();


const restInfo = useRestauratnMenu(resId);

// useEffect(() => {
//     fetchMenu();
// }, [])

// const fetchMenu = async () => {
//     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&query=North%20Indian`)

//     const json = await data.json();
//     console.log(json)
//     setRestInfo(json.data)
// }

const {name, cuisines, cloudinaryImageId, costForTwoMessage} = restInfo?.cards[2]?.card?.card?.info || {};

const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card || {};

return restInfo === null ? (<Shimmer/>): (
    <div className="">
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
        <ul>
            {itemCards?.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>
            ))}
        </ul>
    </div>
)
}

export default RestaurantMenu;

