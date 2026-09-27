import { FaSearch, FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import Avatar from "../../assets/images/avatar.png";
import "./header.css";

import type { AppDispatch, RootState } from "../../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { SetCity } from "../../Store/CitySlice";

const Header = () => {
  const city = useSelector((state: RootState) => state.city.value);

  const dispatch = useDispatch<AppDispatch>();

  const saveRecentCity = (city: string) => {
    if (!city.trim()) return;

    const storedCities = localStorage.getItem("recentSearchedCities");

    const recentSearchedCities: string[] = storedCities
      ? JSON.parse(storedCities): [];

    const updatedCities = recentSearchedCities.filter(
      (item) => item.toLowerCase() !== city.toLowerCase()
    );

    updatedCities.unshift(city.trim());

    localStorage.setItem(
      "recentSearchedCities",
      JSON.stringify(updatedCities.slice(0, 5))
    );
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      saveRecentCity(city);
    }
  };

  return (
    <header className="header">
      <div className="search-box">
        <FaSearch />

        <input
          onChange={(e) => dispatch(SetCity(e.target.value))}
          onKeyDown={handleSearch}
          placeholder="Search For a City"
          type="search"
          value={city}
        />
      </div>

      <div className="header-icons">
        <Link to="">
          <FaRegBell />
        </Link>

        <Link to="">
          <img src={Avatar} alt="Avatar" />
        </Link>
      </div>
    </header>
  );
};

export default Header;