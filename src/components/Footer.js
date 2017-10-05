import React from 'react';
import GatsbyLink from 'gatsby-link';

export default function Footer({ children, className, to }) {
	return (
	<footer class="page-footer">
		<div class="container">
			<div class="row">
				<div class="col l6 s12">
					<h5 class="white-text">Footer Content</h5>
					<p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
				</div>

			</div>
		</div>
		<div class="footer-copyright">
			<div class="container">
			© 2017 Copyright Text
			</div>
		</div>
	</footer>
	);
}
