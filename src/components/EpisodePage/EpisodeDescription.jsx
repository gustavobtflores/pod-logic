import React, { Fragment } from "react";
import ReadMoreBtn from "../Episodes/ReadMoreBtn";

const EpisodeDescription = ({ episodeInfo }) => {
	const text = episodeInfo.description;
	const textReplaced = text.replace(/\. /g, `. \n\n`);
	if (textReplaced.length <= 300) {
		return <p className="episode-description-paragraph">{textReplaced}</p>;
	} else {
		return (
			<Fragment>
				<p className="episode-description-paragraph hidden-episodeDescription">
					{textReplaced}
				</p>
				<ReadMoreBtn
					ReferenceClass=".episode-description-paragraph"
					HiddenClass={"hidden-episodeDescription"}
				/>
			</Fragment>
		);
	}
};

export default EpisodeDescription;
