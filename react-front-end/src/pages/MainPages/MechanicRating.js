import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import blue from '@material-ui/core/colors/blue';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import RatingSize from '../../components/RatingSize';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
import ConfirmTable from '../../components/ConfirmTable';
import useStyles from './MechanicRatingStyles';

import  {Alert} from '../../components/Alert';
import {AlertContext} from '../../context/alert/alertContext';

// const useStyles = makeStyles(theme => ({    
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',    
//     minHeight: '90vh',
//     maxWidth: '100%', 
//     marginTop: theme.spacing(1),   
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column'     
//     }
//   },
//   ContainerStyle: {
//     marginRight: '80px',
//     [theme.breakpoints.down('sm')]: {
//       marginRight: 'auto'     
//     }
//   },
//   boxDivide: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',    
//     minHeight: '100vh',
//     width: '100%',
//     padding: '20px',    
//     [`@media (max-width:380px)`]:{
//         minHeight: '70vh'
//       }       
//   },
//   card: {
//     height: 'auto',
//     width: '500px',
//     maxWidth: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',    
//     flexDirection: 'column',
//     padding: '10px', 
//     margin: '25px',    
//     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
//   },  
//   cardMedia: {
//     maxWidth: '250px',
//     width: '100%',
//     maxHeight: '150px',  
//     height: '100%', 
//     objectFit: 'contain',
//     padding: '65px',
//     //padding: '50%',
//     paddingTop: '56.25%', // 16:9    
//   },
//   cardContent: {
//     flexGrow: 1    
//   },
//   imageStyle: {
//     display: 'block',
//     width: '250px',
//     heigth: '150px',
//     border: 'solid red 1px'
//   }
// }));

export default function MechanicRating({ mechanic, inspection, setRating }) {  
  const classes = useStyles()

  const [stars, setStars] = useState(0)
  console.log('STARSSS ', stars)

  const {show, hide} = useContext(AlertContext); 

  const setDataForRating = () => {
    const rating = { 

      user_id: inspection.user_id,
      mechanic_id: inspection.mechanic_id, 
      inspection_id: Number(inspection.id),     
      inspection_rating: stars
    }
    console.log('ratingggg ', rating)
    setRating(rating)
  }

  return (
    <Box component="div"  className={classes.root}>       
    
      <div component="div" className={classNames(classes.boxDivide, classes.cardHeightAdjustment)} >  
        <Card className={classes.card}>
        <Typography gutterBottom variant="h5" component="h5">   
          Please rate {mechanic.first_name}! 
        </Typography>   
          <CardMedia
            className={classes.cardMedia}
            image={mechanic.avatar}
            title="Image title"
          />          
          < RatingSize stars={stars} setStars={setStars}/>               
          <CardContent className={classes.cardContent}>
            {/* <Typography gutterBottom variant="h5" component="h2">
             { mechanic.first_name} {mechanic.last_name}
            </Typography> */}
            {/* <Typography>
              mechanic.description
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary" onClick={setDataForRating}>
              Submit
            </Button>
            {/* <Button size="small" color="primary">
              Request mechanic.first_name
            </Button>                      */}
          </CardActions>  
        </Card>              
      </div>
      <Container maxWidth="sm" className={classes.ContainerStyle}>
      <div component="div" className={classes.boxDivide}>
      <Container className={classes.cardContainer} maxWidth="sm">      
          <Typography component="h4" variant="h4" align="center" color="textPrimary" className={classes.heroContent} gutterBottom >
            Thank you!<br/>
            Your request is complete.
          </Typography> 
          <Alert />                           
            <ConfirmTable inspection={inspection}/>    
            {/* <div className={classes.buttonStyles}>          
              <Button variant="contained" color="primary" href="/">
                Link
              </Button>
            </div>    */}
        </Container>
      </div>
      </Container>
    </Box>
  );
}

