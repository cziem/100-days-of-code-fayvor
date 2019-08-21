import React from 'react';
import { Main, Section, Button } from '../styles/Welcome';

const Welcome = () => (
	<Main img={require('../assets/img/bng.jpg')}>
		<div className="welcome">
			<Section className="welcome__cta">
				<h2>
					Hello <span>writr</span>
				</h2>
				<p className="welcome__cta-lead">
					The world can't wait to read what's in your mind
				</p>
			</Section>
			<Section className="welcome__cta">
				<Button primary>login</Button>
				<Button fill>sign up</Button>
			</Section>
		</div>
	</Main>
);

export default Welcome;
