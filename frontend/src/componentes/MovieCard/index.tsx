import MovieScore from "componentes/MovieScore";
import { Link } from "react-router-dom";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/11/24/1949526658-euphoria-season-2.jpg",
        title: "Euphoria",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>              
            </div>
        </div>
    );
}

export default MovieCard;