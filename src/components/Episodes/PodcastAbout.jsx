import React from "react";
import ReadMoreBtn from "./ReadMoreBtn";

const PodcastAbout = ({ aboutInfo }) => {
	return (
		<section className="podcast-about">
			<h3 className="section-title about-title">Sobre o Podcast</h3>
			<p className="podcast-about-description hidden-about">
				{aboutInfo.description}
			</p>
			<ReadMoreBtn
				ReferenceClass={`.podcast-about-description`}
				HiddenClass={"hidden-about"}
			/>
		</section>
	);
};

export default PodcastAbout;
