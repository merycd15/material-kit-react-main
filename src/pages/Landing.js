import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActionArea from '@mui/material/CardActionArea';
// import ScrollToTop from '../components/ScrollToTop';
// import { BaseOptionChartStyle } from '../components/chart/BaseOptionChart';
// import Router from '../routes';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        GoStudy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      {' TODOS LOS DERECHOS RESERVADOS.'}
    </Typography>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  justifyContent:'center',
  color: theme.palette.text.secondary,
}));



const theme = createTheme();

export default function Landing() {
  return (
    <ThemeProvider theme={theme}>
    
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                >
                <Button>Login</Button>
                <Button>Register</Button>
            </ButtonGroup>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
            >
            <Container maxWidth="sm">
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                >
                GoStudy
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Esta app está pensada para que todos puedan enseñar o aprender dependiendo de las preferencias de cada uno.
                </Typography>
            </Container>
        </Box>
        <Container sx={{ py: 4}} maxWidth="md">
          {/* End hero unit */}         
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Item sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h4">
                      Registrate Inscribite
                    </Typography>
                    <CardMedia
                      component="img"
                      image="../favicon/number1icon.png"
                      alt="paso1"
                    />
                  </CardContent>
                </CardActionArea>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Agrega cursos
                      </Typography>
                      <CardMedia
                      component="img"
                      image="../favicon/number2icon.png"
                      alt="paso2"
                      />
                    </CardContent>
                    
                  </CardActionArea>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Item sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div" align="center">
                        Enseña Aprende!
                      </Typography>
                      <CardMedia
                      component="img"
                      image="../favicon/number3icon.png"
                      alt="paso3"
                    />
                    </CardContent>
                  </CardActionArea>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Aprende con GoStudy
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Las fotos contenidas en este site, el logotipo y las marcas son propiedad de GoStudy y/o de sus respectivos titulares. Está prohibida la reproducción total o parcial, sin la expresa autorización de la administración.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}