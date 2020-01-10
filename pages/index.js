import React from "react";
import { useState } from 'react';
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";

import { getMovies, getCategories } from "../actions";

const Home = props => {
  const { images, categories, movies } = props;
  const [filter, setFilter] = useState('all');

  const changeCategory = category => {
    setFilter(category);
  };
  const filterMovies = movies => {
    if (filter === 'all') {
      return movies;
    }
    return movies.filter(movie => {
      return movie.genre && movie.genre.includes(filter);
    });
  };
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                categories={categories}
                activeCategory={filter}
                changeCategory={changeCategory} />
            </div>
            <div className="col-lg-9">
              <Carousel images={images} />
              <h1>Display Movie {filter} </h1>
              <div className="row">
                <MovieList movies={filterMovies(movies) || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: `${movie.cover}`,
    title: `${movie.name}`
  }));
  return {
    movies,
    images,
    categories
  };
};
export default Home;
