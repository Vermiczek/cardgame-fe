import React, {useEffect} from 'react';
import {calculatePasswordStrength} from '../../common/userHelpers';

type Props = {
	password: string;
};

const PasswordStrengthMeter = ({password}: Props) => {
	const passwordStrength = calculatePasswordStrength(password);

	// Console log password on change
	useEffect(() => {
		console.log(password);
	}, [password]);

	return (
		<div className='password-strength-meter'>
			<progress
				className='password-strength-meter-progress'
				value={passwordStrength}
				max='4'
			/>
		</div>
	);
};

export default PasswordStrengthMeter;
