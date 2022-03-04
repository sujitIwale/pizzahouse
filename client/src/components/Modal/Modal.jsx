import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalOverlay = ({ closeModal, children, modalTitle }) => {
	const content = (
		<div
			className='modalBackground'
			onClick={() => {
				closeModal();
			}}>
			<div
				className='modalContainer'
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<div className='titleCloseBtn'>
					<button
						onClick={() => {
							closeModal();
						}}>
						<i className='fas fa-times white'></i>
					</button>
					<div className='modal-title'>{modalTitle}</div>
				</div>
				{children}
			</div>
		</div>
	);
	return ReactDOM.createPortal(content, document.getElementById('modal'));
};

function Modal(props) {
	return <ModalOverlay {...props} />;
}

export default Modal;
