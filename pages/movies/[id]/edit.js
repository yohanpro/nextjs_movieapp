import React, { Component } from 'react';
import Router from 'next/router';
import MovieCreateform from '../../../components/movieCreateForm';
import { getMovieById, updateMovie } from '../../../actions';


class EditMovie extends Component {

    static async getInitialProps({ query, router }) {
        const movie = await getMovieById(query.id);
        const myRouter = router;
        return { movie, myRouter };
    }
    handleUpdateMovie(movie) {
        updateMovie(movie).then(updateMovie => {
            Router.push('/movies/[id]', `/movies/${movie.id}`);
        });
    };
    render() {
        const { movie } = this.props;
        return (
            <div className="container">
                <h1>Edit the movie</h1>
                <MovieCreateform
                    handleFormSubmit={this.handleUpdateMovie}
                    submitButton="UPDATE"
                    initialData={movie} />
            </div>
        );
    }
}

export default EditMovie;