const RestaurantCard = ({resData}) => {
    const data = resData.info;
    return (
            <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
                <img alt="res-logo" className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar" ></img>
                <h3>{data?.name}</h3>
                <h4>{data?.cuisines.join(", ")}</h4>
                <h4>{data?.avgRating}</h4>
                <h4>{data?.deliveryTime}</h4>
            </div>
        
    )
}

export default RestaurantCard;