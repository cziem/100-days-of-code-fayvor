import React from 'react';
import { Link } from 'react-router-dom';
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
			<Section className="welcome__cta-btns">
				<Link to="/login">
					<Button primary>login</Button>
				</Link>
				<Link to="sign-up">
					<Button fill="true">sign up</Button>
				</Link>
			</Section>
		</div>
	</Main>
);

export default Welcome;
