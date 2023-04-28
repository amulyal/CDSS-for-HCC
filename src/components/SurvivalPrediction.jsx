import { useState } from 'react';
import '../stylesheets/Page.css';
import {
  Card, CardContent, TextField, Button, CardActions, Typography, Box, Modal,
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

const SurvivalPrediction = () => {
  const [albumin, setAlbumin] = useState();
  const [bilirubin, setBilirubin] = useState();
  const [score, setScore] = useState(0);
  const [grade, setGrade] = useState(0);
  const [medianSurvival, setMedianSurvival] = useState('');

  const [open, setOpen] = useState(false);

  const isInvalid = (alb) => alb < 0.2 || alb > 10;

  const handleAlbiSubmit = (e) => {
    e.preventDefault();
    const ans = (Math.log10(bilirubin * 17.1) * 0.66) + (albumin * 10 * (-0.085));
    setScore(ans);
    if (score <= -2.6) {
      setGrade(1);
      setMedianSurvival('18.5-85.6 months');
    } else if (score > -2.6 && score <= -1.39) {
      setGrade(2);
      setMedianSurvival('5.3-46.5 months');
    } else if (score > -1.39) {
      setGrade(3);
      setMedianSurvival('2.3-15.5 months');
    } else {
      setGrade(0);
      setMedianSurvival('Invalid');
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
              Al-Bi Score for Hepato Cellular Carcinoma
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
                  <TextField error={isInvalid(albumin)} helperText={isInvalid(albumin) ? 'Out of range value' : ''} required id="albumin" label="Albumin" value={albumin} onChange={(e) => { setAlbumin(e.target.value); }} />
                  <Typography>in mg/dL</Typography>
                </div>
                <br />
                <div style={inline}>
                  <TextField error={isInvalid(albumin)} helperText={isInvalid(albumin) ? 'Out of range value' : ''} required id="bilirubin" label="Bilirubin" value={bilirubin} onChange={(e) => { setBilirubin(e.target.value); }} />
                  <Typography>in mg/dL</Typography>
                </div>
                <div style={inline}>
                  <CardActions>
                    <Button variant="outlined" size="medium" type="submit" onClick={handleAlbiSubmit}>Submit</Button>
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
                      Grade is
                      {' '}
                      {grade}
                      . Hence, survival period is
                      {' '}
                      {medianSurvival}
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

export default SurvivalPrediction;
