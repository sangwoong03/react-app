import React, { useState, useEffect } from "react";
import Content from "../components/Content";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movieData, setMovieData] = useState([]);

	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovieData(json.data.movie);
		setLoading(false);
		console.log(json);
	};

	useEffect(() => {
		getMovie();
	}, []);

	return (
		<div className={styles.container}>
			{loading ? (
				<Loading />
			) : (
				<Content
					background_image_original={movieData.background_image_original}
					medium_cover_image={movieData.medium_cover_image}
					url={movieData.url}
					title_long={movieData.title_long}
					rating={movieData.rating}
					runtime={movieData.runtime}
					genres={movieData.genres}
					download_count={movieData.download_count}
					description_intro={movieData.description_intro}
				/>
			)}
		</div>
	);
}

export default Detail;
