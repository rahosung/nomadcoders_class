import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImage, title, summary, genres }) {
  const location = useLocation();
  console.log(process.env.PUBLIC_URL);
  console.log(location.pathname);
  console.log(location.pathname === process.env.PUBLIC_URL);
  return (
    <div className={styles.movie}>
      <img src={coverImage} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>2024</h3>
      <p>{location.pathname === `${process.env.PUBLIC_URL}/` && summary ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
