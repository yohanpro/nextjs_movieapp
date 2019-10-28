import { useRouter } from "next/router";
import { getMovieById } from "../../actions";
const Movie = props => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;
  console.log(movie);
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">This movie is {movie.name}</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classNamees for typography and spacing to space
          content out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
      <p>Description</p>
    </div>
  );
};
Movie.getInitialProps = async () => {
  const movie = await getMovieById("2");

  return { movie };
};
export default Movie;
