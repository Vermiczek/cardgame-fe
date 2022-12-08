import React from 'react';
import {calculatePasswordStrength} from '../../common/userHelpers';

type Props = {
	password: string;
};

const PasswordStrengthMeter = ({password}: Props) => {
	const passwordStrength = calculatePasswordStrength(password);

	return (
		<div className='password-strength-meter'>
			<progress
				className='password-strength-meter-progress'
				value={passwordStrength}
				max='100'
			/>
		</div>
	);
};

export default PasswordStrengthMeter;
