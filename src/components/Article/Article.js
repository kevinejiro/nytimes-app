import React, { memo } from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Article.scss'

/**
 *
 * @param {*} props
 * @returns {JSX} JSX element
 */
function ArticleComponent(props) {
  return (
		<Link to={`/${props.id}`}>
			<Media className="article-component">
				<Media left>
					<img src={props.media[0]['media-metadata'][1].url} alt="airticleImage" ></img>
				</Media>
				<Media body>
					<Media heading>
						{props.title}
					</Media>
					<div className="by-line" >{props.byline}</div>
					<div className="date" >
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="15"
							height="15"
							viewBox="0 0 25 25"
							>
							<path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
							<path fill="none" d="M0 0h24v24H0z" />
						</svg>
						{props.published_date}
					</div> 
				</Media>
				<div className="right-svg">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
				</div>
			</Media>
		</Link>
  );
};

export const Article = memo(ArticleComponent);
