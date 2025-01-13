import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import './BasicModal.css';
import particularbrush from '../../../images/AKS07722.png'
const BasicModal = ({ open, onClose }) => {
  const handleClose = () => {
    onClose && onClose();
  };
 
  

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-container">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Customize Your Brush
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter the Name that you want on the Brush"
            style={{ width: '100%', marginBottom: '1rem' }}
          />
          <div className='four_brushes_modal'>
            <img src={particularbrush} alt="firstImage"/>
            <img src={particularbrush} alt="firstImage"/>
            <img src={particularbrush} alt="firstImage"/>
            <img src={particularbrush} alt="firstImage"/>

          </div>
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
