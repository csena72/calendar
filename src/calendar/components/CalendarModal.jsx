import { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const onCloseModal = () => {
        console.log('cerrando Modal');
        setIsOpen( false );
    }

  return (
    <Modal
        isOpen={ isOpen }
        onRequestClose={ onCloseModal }
        style={customStyles}
        className={'modal'}
        overlayClassName={'modal-fondo'}
        closeTimeoutMS={200}
    >
        <h1>Hoola Mundo en modal</h1>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis quidem laborum illum nulla sapiente. Sunt laborum, delectus cupiditate maiores pariatur ex amet ea quis et, voluptatem nisi facere eligendi!</p>

    </Modal>
  )
}
