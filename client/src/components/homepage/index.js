import React, { useContext, useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import red from '@mui/material/colors/red';
import { QUERY_USER, QUERY_ME } from '../../utils/queries'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import logo from '../../img/ApeFlexing.png';
import { ExerciseContext } from '../..';




//conditionally renders homepage for logged in users
function Logo(){
  return <img src={logo} className='logo' alt='Muscular ape with hands on hips.'></img>
}

// below contains the function to get cards to render dynamically


// below we are having an issue in which the console displays empty arrays



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        APECLUB FITNESS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
//below goes with function below line 35
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({palette: {primary: red,},});

export default function Album() {
  const [ exercises ] = useContext(ExerciseContext);
  const [ exerciseArr, setExerciseArr ] = useState([]);

  const { username: userParam } = useParams();
  const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
     variables: { username: userParam }
   })
   const user = data?.me||data?.user
console.log(user, exercises);

function savedCards (workoutData, exercises) {
  let cardDataArray = []
    for ( let i = 0; i < workoutData.length; i++) {
      if (cardDataArray.length < 9) {
        const exerciseFilter = exercises.find(obj => {
          console.log(obj);
          return obj.id === workoutData[i].exercise_id;
        })
        cardDataArray.push(exerciseFilter)
      }
    }
  setExerciseArr(cardDataArray);
  
  console.log("This what we are lookign for", cardDataArray)
  
  }
  useEffect(() => {savedCards(user?.workouts || [], exercises)},[exercises, user]);

  if(loading) return 'Loading...'
  if(error) return `Error ${error.message}`

  function viewWorkouts() {
    window.location.assign('/exercises')
  }

  async function deleteExercise() {
    const exercise = {
      user_id: user._id,
      exercise_id: pageExercises[currentExercise].id
  }
  console.log(exercise);
  try {
      const { data } = await deleteWorkout({
      variables: { user_id: user._id, exercise_id: pageExercises[currentExercise].id},
      });
      console.log(data)
  } catch (e) {
      console.error(e);
  }
}
  

   // below belongs to line 35

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="black" noWrap>
           <strong> WELCOME TO THE APECLUB!</strong>

          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.black',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="red"
              gutterBottom

            >
              <Logo />
              <div>
              ARE YOU READY TO GO APESHIT?
              </div>
            </Typography>
            <Typography variant="h4" align="center" color="red" paragraph>
            {/* check with backend and change $username to correct name and syntax */}
              Hello {user.username}! This page is where you save and view your workouts, as well as view other ape's workouts.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button onClick={viewWorkouts} variant="outlined">View Workouts</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {exerciseArr.map((card) => (
              <Grid item key={card?._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image= {card?.gifUrl}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h3" component="h2">
                      {card?.name}
                    </Typography>
                    <Typography>
                    {card?.bodyPart}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button onClick={viewWorkouts} variant="outlined">Delete Workouts</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h5" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}