import React, {useEffect, useRef} from 'react';
import Modal from 'react-modal';

// Write prop types for ErrorModal
type WarningModalProps = {
	onClose?: () => void;
	isOpen: boolean;
	onAfterOpen?: () => void;
	onRequestClose?: () => void;
	onConfirm?: () => void;
	errorTitle: string;
	errorText: string;
};

//
const WarningModal = ({
	onClose = () => {/**/},
	isOpen,
	onAfterOpen = () => {/**/},
	onRequestClose = () => {/**/},
	errorTitle,
	errorText,
	onConfirm = () => {/**/},
}: WarningModalProps) => (
	<Modal
		className='h-full w-full flex items-center justify-center'
		isOpen={isOpen}
		onAfterOpen={onAfterOpen}
		onRequestClose={onRequestClose}
		contentLabel='Warning Modal'
	>
		<div className='w-80 opacity-90 px-10 mh-64 flex flex-col items-center p-2 justify-center bg-slate-900 rounded-md shadow-xl'>
			<div className='text-slate-300 mb-2'><b>{errorTitle}</b></div>
			<hr className='w-48 flex flex-col items-center justify-center divide-slate-300 rounded-md shadow-xl'></hr>
			<div className='my-4 text-slate-300'>{errorText}</div>
			<div>
				<button
					onClick={onConfirm}
					className='bg-red-700 m-1 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full'>
                        Yes
				</button>
				<button
					onClick={onClose}
					className='bg-red-700 m-1 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full'>
                        No
				</button>
			</div>
		</div>
	</Modal>
);

export default WarningModal;
