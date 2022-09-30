// @mui
import * as React from 'react';
import { Grid, Container, Typography } from '@mui/material';
// components
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Paper from '@mui/material/Paper';
import Page from '../components/Page';

// sections
import {
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  justifyContent:'center',
}));

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
    
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Mis cursos
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Matemática" total="24" color="info" icon={'ant-design:book-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Física" total="30" color="info" icon={'ant-design:book-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Fílosofia" total="12" color="info" icon={'ant-design:book-filled'} />
          </Grid>
        
        </Grid>
        </Container>
        <Container sx={{ py: 4}} maxWidth="sm"> 
          <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={4}>
                <Item sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardActionArea href="/dashboard/cursos">
                    <CardContent>
                      <Typography variant="h4" sx={{ mb: 2 }}>
                        Agregar curso
                      </Typography>
                      <CardMedia
                        component="img"
                        image="../favicon/add-icon.jpg"
                        alt="paso1"
                      />
                    </CardContent>
                  </CardActionArea>
                </Item>
              </Grid>
            </Grid>
          </Container>       
    </Page>
  );
}
