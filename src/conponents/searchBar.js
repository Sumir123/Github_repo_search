import React, { useState, useEffect } from "react";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import SearchResult from "./searchResult";

const SearchBar = () => {
  const navigate = useNavigate();
  const prams = useParams();

  var searchval = prams.value;

  const [searchInput, setSearchInput] = useState(searchval);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function search() {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${searchInput}`
        );
        setData(response.data.items);
      } catch (error) {
        console.error(error);
      }
    }
    if (searchval) {
      search();
    }
  }, []);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchInput}`
      );
      setData(response.data.items);
    } catch (error) {
      console.error(error);
    }
    navigate("/search/" + searchInput);
  };

  return (
    <>
      <div className="container_1">
        <div className="search_form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              className="search_input"
              value={searchInput}
              onChange={handleChange}
            ></input>
            {searchInput ? (
              <input
                type="reset"
                value="X"
                className="reset_btn"
                onClick={resetInput}
              ></input>
            ) : (
              <></>
            )}

            <BsSearch className="search_icon" onClick={handleSubmit} />
          </form>
        </div>
      </div>
      <SearchResult data={data} />
    </>
  );
};

export default SearchBar;
