import React from 'react';

const Notfound = ({ location }) => (
	<>
		<h3>
			Page not found for <code>'{location.pathname}'</code>
		</h3>
	</>
);

export default Notfound;
