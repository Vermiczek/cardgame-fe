import React, {useEffect, useRef} from 'react';
import Modal from 'react-modal';

// Write prop types for ErrorModal
type ErrorModalProps = {
	onClose: () => void;
	isOpen: boolean;
	onAfterOpen: () => void;
	onRequestClose: () => void;
};

const ErrorModal = ({
	onClose,
	isOpen,
	onAfterOpen,
	onRequestClose,
}: ErrorModalProps) => (
	<Modal
		className='h-full w-full flex items-center justify-center'
		isOpen={isOpen}
		onAfterOpen={onAfterOpen}
		onRequestClose={onRequestClose}
		contentLabel='Example Modal'
	>
		<div className='w-64 h-32 flex opacity-50 flex-col items-center p-2 justify-center bg-white rounded-md shadow-xl'>
			<div>LOL</div>
			<hr className='w-64 flex flex-col items-center justify-center bg-white rounded-md shadow-xl'></hr>
			<div className='my-4'>I am a modal</div>
			<button
				onClick={onClose}
				className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
			>
      close
			</button>
		</div>
	</Modal>
);

export default ErrorModal;
