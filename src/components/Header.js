import React from 'react';
import GatsbyLink from 'gatsby-link';

export default function Footer({ children, className, to }) {
	return (
		<header>
			<nav>
				<div class="container">
				<div class="nav-wrapper">
					<a href="#" class="brand-logo">My Blog</a>
				</div>
				</div>
			</nav>
		</header>
	);
}
