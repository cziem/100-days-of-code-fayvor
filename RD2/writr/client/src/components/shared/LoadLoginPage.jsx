import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styles/Login';
import { Main, Section, CTA, Header } from '../../styles/LoadLogin';

const LoadLoginPage = () => {
	return (
		<Main>
			<Header>
				<h3>Registration was successful</h3>
			</Header>

			<Section>
				<p>
					Check your mail to verify your account.{' '}
					<span>Your unique verification code expires in 5mins</span>
				</p>

				<CTA>
					{/* <Button primary>Verify Account</Button> */}
					<Link to="/login">
						<Button primary>Continue to login</Button>
					</Link>
				</CTA>
			</Section>
		</Main>
	);
};

export default LoadLoginPage;
