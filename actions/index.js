const MOVIE_DATA = [{
    id: "1",
    name: "The Shawshank Redemption",
    releaseYear: 1994,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 4.8,
    genre: "drama",
    image: "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg",
    cover: "https://cdn.pixabay.com/photo/2017/08/06/18/05/pumpkin-2594747_1280.jpg"
  },
  {
    id: "2",
    name: "The Dark Knight",
    releaseYear: 2008,
    description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 4.7,
    genre: "action, crime, drama",
    image: "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600",
    cover: "https://cdn.pixabay.com/photo/2016/05/21/21/33/batman-1407484_1280.jpg"
  },
  {
    id: "3",
    name: "Lord of the Rings",
    releaseYear: 2004,
    description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    rating: 4.9,
    genre: "adventure, drama, fantasy",
    image: "https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600",
    cover: "https://cdn.pixabay.com/photo/2016/09/24/22/26/ring-1692713_1280.jpg"
  }
];
const CATEGORY_DATA = [{
    id: "1",
    name: "drama"
  },
  {
    id: "2",
    name: "action"
  },
  {
    id: "3",
    name: "adventure"
  },
  {
    id: "4",
    name: "historical"
  }
];

export const getCategories = () => {
  return new Promise((res, rej) => {
    res(CATEGORY_DATA);
  });
};
export const getMovies = () => {
  return new Promise((res, rej) => {
    res(MOVIE_DATA);
  });
};
export const createMovies = movie => {
  return new Promise((res, rej) => {

    movie.id = Math.random().toString(36).substr(2, 7);
    MOVIE_DATA.push(movie);
    res(MOVIE_DATA);
  });
};

export const getMovieById = id => {
  return new Promise((res, rej) => {
    const movieIndex = MOVIE_DATA.findIndex(m => m.id === id);
    const movie = MOVIE_DATA[movieIndex];

    setTimeout(() => {
      res(movie);
    }, 50);
  });
};