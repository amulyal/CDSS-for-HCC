import { useState } from 'react';
import '../stylesheets/Page.css';
import {
  Card, CardContent, TextField, Button, CardActions, Typography, Box, Modal,
  MenuItem, FormControl, InputLabel, Select,
} from '@mui/material';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const inline = {
  display: 'flex',
  alignItems: 'center',
  columnGap: '20px',
  justifyContent: 'center',
};

const url = 'https://ml-api-6iw9.onrender.com';

const Metroticket = () => {
  const [singleTumor, setSizeTumor] = useState();
  const [numberTumor, setNumberTumor] = useState();
  const [vasInv, setVasInv] = useState(0);

  const [survivalRate, setSurvivalRate] = useState();

  const [open, setOpen] = useState(false);

  const isInvalid = (numb) => numb < 0 || numb > 10;

  const handleMetroSubmit = (e) => {
    e.preventDefault();
    const params = JSON.stringify({
      SingleTumor: parseFloat(singleTumor),
      NumberTumor: parseInt(numberTumor, 10),
      VasInv: parseInt(vasInv, 10),
    });
    axios.post(url, params, {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => {
        const answer = response.data.prediction;
        setSurvivalRate(answer);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <br />
      <section className="cal-container">
        <div className="container">
          <div className="calculator">
            <h3 className="headingtitle">
              Metroticket Calculator for Hepato Cellular Carcinoma
              <br />
            </h3>
            Predicts survival in HCC patients.
            <br />
            <br />
          </div>
          <Card>
            <CardContent>
              <form id="login">
                <div style={inline}>
                  <TextField error={isInvalid(singleTumor)} helperText={isInvalid(singleTumor) ? 'Out of range value' : ''} required id="singleTumor" label="Size of the largest node" value={singleTumor} onChange={(e) => { setSizeTumor(e.target.value); }} />
                  <Typography>in mm</Typography>
                </div>
                <br />
                <div style={inline}>
                  <TextField error={isInvalid(numberTumor)} helperText={isInvalid(numberTumor) ? 'Out of range value' : ''} required id="numberTumor" label="Number of nodules" value={numberTumor} onChange={(e) => { setNumberTumor(e.target.value); }} />
                  <Typography>number</Typography>
                </div>
                <br />
                <div style={inline}>
                  <Typography>Vascular Invasion</Typography>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={vasInv}
                      label="VasInv"
                      onChange={(e) => { setVasInv(e.target.value); }}
                    >
                      <MenuItem value={1}>Yes</MenuItem>
                      <MenuItem value={0}>No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={inline}>
                  <CardActions>
                    <Button variant="outlined" size="medium" type="submit" onClick={handleMetroSubmit}>Submit</Button>
                  </CardActions>
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Survival Prediction of Patient
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Predicted Survival Rate is
                      {' '}
                      {survivalRate}
                      %.
                    </Typography>
                  </Box>
                </Modal>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Metroticket;
