import React from "react";
import styles from "./Content.module.css";

function Content({
	background_image_original,
	medium_cover_image,
	url,
	title_long,
	rating,
	runtime,
	genres,
	download_count,
	description_intro,
}) {
	return (
		<div>
			<img
				className={styles.bg}
				src={background_image_original}
				alt="background_image"
			/>
			<div className={styles.content__wrap}>
				<img
					className={styles.content__img}
					src={medium_cover_image}
					alt="medium_cover_image"
				/>
				<div className={styles.content__detail}>
					<h1 className={styles.content__title}>
						<a href={url} target="_blank" rel="noreferrer">
							{title_long}
						</a>
					</h1>
					<ul>
						<li>
							Rating <strong>{rating}</strong>{" "}
						</li>
						<li>
							Runtime <strong>{runtime}</strong>{" "}
						</li>
						<li>
							Download <strong>{download_count}</strong>{" "}
						</li>
						<li>
							Genres
							<ul>
								{genres.map((genre) => (
									<li key={genre}>
										<strong>{genre}</strong>
									</li>
								))}
							</ul>
						</li>
					</ul>
					<div className={styles.content__summary}>
						<span> Summary </span>
						<p>{description_intro}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
