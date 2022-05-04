import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
	if (coverImg === "") {
		return null;
	}
	return (
		<div className={styles.movie}>
			<img src={coverImg} alt={title} className={styles.movie__img} />
			<div>
				<h2 className={styles.movie__title}>
					{/* <a> 태그의 href로 이동하면 상태 값을 잃고 성능 저하 */}
					<Link to={`/movie/${id}`}>
						{title.length > 50 ? `${title.slice(0, 50)}...` : title}
					</Link>
				</h2>
				<h3 className={styles.movie__year}>{year}</h3>
				<p className={styles.movie__summary}>
					{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
				</p>
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
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
