import React, { memo } from 'react';
import { Link, withRouter } from 'react-router-dom';

/**
 *
 * @param {*} props
 * @returns {JSX} JSX element
 */
function NotFoundComponent(props) {
	return (
		<div className="not-found-body">
			<div className="page-wrap d-flex flex-row align-items-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-12 text-center">
							<span className="display-1 d-block">404</span>
							{props.location.pathname === '/' ? (
								<div className="mb-4 lead">No Articles found.</div>
							) : (
									<div>
										<div className="mb-4 lead">Page not found.</div>
										<Link to="/">
											<p className="back-home">Back to Home</p>
										</Link>
									</div>
								)
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const NotFound = withRouter(memo(NotFoundComponent));