import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import MovieCreateform from '../../../components/movieCreateForm';
import { getMovieById, createMovie } from '../../../actions';


class EditMovie extends Component {

    static async getInitialProps({ query, router }) {
        const movie = await getMovieById(query.id);
        const myRouter = router;
        return { movie, myRouter };
    }
    handleCreateMovie(movie) {

        createMovie(movie).then((movies) => {

            Router.push({
                pathname: '/',
                // query: { name: 'Someone' }
            });
        });
    };
    render() {
        const { movie } = this.props;
        return (
            <div className="container">
                <h1>Edit the movie</h1>
                <MovieCreateform handleFormSubmit={this.handleCreateMovie} initialData={movie} />
            </div>
        );
    }
}

export default withRouter(EditMovie);