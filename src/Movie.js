import React from 'react';
import './Movie.css';


class Movie extends React.Component{
    render(){
        console.log(this.props);
        return(
        <h1>
            {this.props.title}
            <img src = {this.props.imgurl} alt = 'movie_img' width = '50px'/>
        </h1>
        )
    }
};

export default Movie;
