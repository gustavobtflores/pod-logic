import React, { useState } from "react";
import readMoreIcon from "../../assets/img/read-more-icon.svg";

const ReadMoreBtn = ({ ReferenceClass, HiddenClass }) => {
	const [readMore, setReadMore] = useState(true);

	const ReadMore = () => {
		const description = document.querySelector(ReferenceClass);
		setReadMore(!readMore);
		if (readMore) {
			description.classList.remove(HiddenClass);
		} else {
			description.classList.add(HiddenClass);
		}
	};

	return (
		<span className="read-more-btn" onClick={ReadMore}>
			{readMore ? "Ler mais" : "Ler menos"}
			{
				<img
					src={readMoreIcon}
					className={readMore ? "read-more-icon icon" : "read-less-icon icon"}
					alt=""
				></img>
			}
		</span>
	);
};

export default ReadMoreBtn;
