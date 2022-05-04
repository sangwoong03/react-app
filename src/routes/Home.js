import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`,
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className={styles.container}>
			{loading ? (
				<Loading />
			) : (
				<div className={styles.movie__list}>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							year={movie.year}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
							className={styles.movie__item}
						/>
					))}
				</div>
			)}
		</div>
	);
}
export default Home;
