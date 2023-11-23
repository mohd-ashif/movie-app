import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import "./LeftSideBar.css";
import { BsFillXCircleFill } from "react-icons/bs";

const LeftListBarComponent = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage
}) => {
  const API_KEY = "90b17c84b484021cf2a93b22b3512b4f";

  const getDataList = async () => {
    const { data: { genres } } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
    setGenres(genres);
  };

  useEffect(() => {
    getDataList();
    return () => {
      setGenres([]);
    };
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  return (
    <aside className="asideBar me-auto my-2 my-lg-0">
      <h3>Filter By :-</h3>
      <ListGroup>
        {selectedGenres && selectedGenres.map((item) => (
         <ListGroup.Item className='selected' onClick={()=>{return handleRemove(item)}} key={`${item.id}newtag`}>
          {item.name}<i><BsFillXCircleFill /></i>
                            </ListGroup.Item>
        ))}
        {genres && genres.length > 0 ? genres.map((item) => (
          <ListGroup.Item key={item.id} onClick={() => handleAdd(item)}>
            {item.name}
          </ListGroup.Item>
        )) : "Loading.."}
      </ListGroup>
    </aside>
  );
};

export default LeftListBarComponent;
