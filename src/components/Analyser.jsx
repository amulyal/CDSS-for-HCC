import { useState } from 'react';
import '../stylesheets/Page.css';
import {
  Card, CardContent, FormControl, InputLabel, Select, Button, CardActions,
  Typography, Box, Modal, MenuItem, TextField,
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
  const [singleTumour, setSingleTumour] = useState(0);
  const [numberTumour, setNumberTumour] = useState(0);
  const [extraHepatic, setExtraHepatic] = useState(0);
  const [majorVessel, setMajorVessel] = useState(0);
  const [criteria, setCriteria] = useState('');

  const [inr, setINR] = useState();
  const [tbilirubin, setTBilirubin] = useState();
  const [creatinine, setCreatinine] = useState();
  const [mortalityRate, setMortalityRate] = useState('');

  const [open, setOpen] = useState(false);

  const isInvalid = (alb) => alb < 0.2 || alb > 10;

  const handleMilanSubmit = (e) => {
    e.preventDefault();
    const milan = ((!singleTumour && numberTumour && extraHepatic)
      || (singleTumour && numberTumour && majorVessel));
    if (milan) {
      setCriteria(' met');
    } else {
      setCriteria(' not met');
    }
    setOpen(true);
  };

  const handleMeldSubmit = (e) => {
    e.preventDefault();
    const meld = 10 * [(0.957 * Math.log(creatinine)) + (0.378 * Math.log(tbilirubin))
      + (1.12 * Math.log(inr))] + 6.43;
    if (meld >= 40) {
      setMortalityRate('71.3%.');
    } else if (meld >= 30 && meld < 40) {
      setMortalityRate('52.6%.');
    } else if (meld >= 20 && meld < 30) {
      setMortalityRate('19.6%.');
    } else if (meld >= 10 && meld < 20) {
      setMortalityRate('6.0%.');
    } else {
      setMortalityRate('1.9%.');
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
              Milan Criteria for HCC Liver Transplant.
              <br />
            </h3>
            Suitability of patients for liver transplant.
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
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={singleTumour}
                      label="SingleTumor"
                      onChange={(e) => { setSingleTumour(e.target.value); }}
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
                      required
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={numberTumour}
                      label="NumberTumor"
                      onChange={(e) => { setNumberTumour(e.target.value); }}
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
                      required
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
                      required
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
                      Suitability Assesment of Patient
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Criteria:
                      {criteria}
                    </Typography>
                  </Box>
                </Modal>
              </form>
            </CardContent>
          </Card>
        </div>
        {/* ---------COMPONENT 2-------------- */}
        <div className="container">
          <div className="calculator">
            <h3 className="headingtitle">
              Model for End Stage Liver Disease
              <br />
            </h3>
            Short-term survival for transplant planning.
            <br />
            <br />
          </div>
          <Card>
            <CardContent>
              <form id="login">
                <div style={inline}>
                  <TextField error={isInvalid(inr)} helperText={isInvalid(inr) ? 'Out of range value' : ''} required id="inr" label="INR" value={inr} onChange={(e) => { setINR(e.target.value); }} />
                  <Typography>no units</Typography>
                </div>
                <br />
                <div style={inline}>
                  <TextField error={isInvalid(tbilirubin)} helperText={isInvalid(tbilirubin) ? 'Out of range value' : ''} required id="tbilirubin" label="TBilirubin" value={tbilirubin} onChange={(e) => { setTBilirubin(e.target.value); }} />
                  <Typography>in mg/dL</Typography>
                </div>
                <br />
                <div style={inline}>
                  <TextField error={isInvalid(creatinine)} helperText={isInvalid(creatinine) ? 'Out of range value' : ''} required id="creatinine" label="Creatinine" value={creatinine} onChange={(e) => { setCreatinine(e.target.value); }} />
                  <Typography>in mg/dL</Typography>
                </div>
                <div style={inline}>
                  <CardActions>
                    <Button variant="outlined" size="medium" type="submit" onClick={handleMeldSubmit}>Submit</Button>
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
                      Survival Prediction of Patient with end-stage liver disease
                      -for transplant planning.
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Based on MELD Score, the mortality rate is
                      {' '}
                      {mortalityRate}
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
