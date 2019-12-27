import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import RatingSize from '../components/RatingSize';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  card: {
    height: '500px',
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px'
  },  
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },  
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialog: {
    opacity: '0.3'
  }
}));

SimpleDialogDemo.propTypes = {
  onClose: PropTypes.func    
};

export default function SimpleDialogDemo({ mechanic, closeModal, modalOpen }) {
  const [open, setOpen] = React.useState(false); 
  const classes = useStyles(); 

  useEffect(() => {

    if (modalOpen === true){
      setOpen(true)    
    } 
  },[]);  

  const handleClose = value => {    
    setOpen(false);
    closeModal()
  };

  const mechanicRequest = (event) => {
    event.stopPropagation();
    console.log("This is a mechanic request")    
  }

  return (    
  
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} className={classes.dialog}>
      <CssBaseline />      
      <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <DialogTitle id="simple-dialog-title">Best mechanic ever!</DialogTitle>
        <Card className={classes.card}>                        
          <CardMedia
            className={classes.cardMedia}
            image = {mechanic.avatar}
            title="Image title"
          />   
          < RatingSize />               
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {mechanic.first_name} {mechanic.last_name}
            </Typography>
            <Typography>
              {mechanic.description}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button size="small" color="primary">
              View
            </Button> */}
            <Button size="small" color="primary" onClick={ mechanicRequest }>
              Request {mechanic.first_name}
            </Button>                      
          </CardActions> 
        </Card>
    </Dialog>
  
  );
}
