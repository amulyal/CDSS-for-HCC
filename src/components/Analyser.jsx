import { useState } from 'react';
import '../stylesheets/Page.css';
import {
  Card, CardContent, FormControl, InputLabel, Select, Button, CardActions,
  Typography, Box, Modal, MenuItem,
} from '@mui/material';

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

const Analyser = () => {
  const [singleTumor, setSingleTumor] = useState(0);
  const [numberTumor, setNumberTumor] = useState(0);
  const [extraHepatic, setExtraHepatic] = useState(0);
  const [majorVessel, setMajorVessel] = useState(0);
  const [criteria, setCriteria] = useState('');

  const [open, setOpen] = useState(false);

  const handleMilanSubmit = (e) => {
    e.preventDefault();
    const milan = 0; //check logical expression
    if (milan) {
      setCriteria(' met');
    } else {
      setCriteria(' not met');
    }
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
              Milan Criteria for Hepato Cellular Carcinoma
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
                  <Typography>Single tumor with diameter ≤5 cm</Typography>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={singleTumor}
                      label="SingleTumor"
                      onChange={(e) => { setSingleTumor(e.target.value); }}
                    >
                      <MenuItem value={0}>No</MenuItem>
                      <MenuItem value={1}>Yes</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <br />
                <div style={inline}>
                  <Typography>Up to 3 tumors each with diameter ≤3 cm</Typography>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={numberTumor}
                      label="NumberTumor"
                      onChange={(e) => { setNumberTumor(e.target.value); }}
                    >
                      <MenuItem value={0}>No</MenuItem>
                      <MenuItem value={1}>Yes</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <br />
                <div style={inline}>
                  <Typography>Extra-hepatic involvement</Typography>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={extraHepatic}
                      label="ExtraHepatic"
                      onChange={(e) => { setExtraHepatic(e.target.value); }}
                    >
                      <MenuItem value={1}>No</MenuItem>
                      <MenuItem value={0}>Yes</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <br />
                <div style={inline}>
                  <Typography>Major vessel involvement</Typography>
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={majorVessel}
                      label="MajorVessel"
                      onChange={(e) => { setMajorVessel(e.target.value); }}
                    >
                      <MenuItem value={1}>No</MenuItem>
                      <MenuItem value={0}>Yes</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <br />
                <div style={inline}>
                  <CardActions>
                    <Button variant="outlined" size="medium" type="submit" onClick={handleMilanSubmit}>Submit</Button>
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
                      Survival Predict of Patient
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Criteria {criteria}
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

export default Analyser;
