
import { FaLocationDot } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import CustomeDatePicker from "../CustomeDatePicker/CustomeDatePicker";
import "./cityHeadTitle.css"
interface CityHeadTitleProps{
    region:string,
    country:string,
    addToFavorites:boolean,
    date:boolean
}

const CityHeadTitle = ({region,country,addToFavorites,date}:CityHeadTitleProps) => {
   const saveFavCity = (city: string) => {
    if (!city.trim()) return;

    const storedCities = localStorage.getItem("saved-cities");

    const recentSearchedCities: string[] = storedCities
      ? JSON.parse(storedCities): [];

    const updatedCities = recentSearchedCities.filter(
      (item) => item.toLowerCase() !== city.toLowerCase()
    );

    updatedCities.unshift(city.trim());

    localStorage.setItem(
      "saved-cities",
      JSON.stringify(updatedCities.slice(0, 5))
    );
  };    
    return ( 
         <div className="head d-flex align-items-center gap-2 justify-content-between flex-wrap">
            <h2>
            <FaLocationDot fontSize={30} />
                
                {region},{country}</h2>
            {addToFavorites ? <button onClick={()=>saveFavCity(country)} className="addToFav"><FaRegStar />  Add to Favorites</button> :date ? <CustomeDatePicker  /> : "" }
        </div>
     );
}
 
export default CityHeadTitle;