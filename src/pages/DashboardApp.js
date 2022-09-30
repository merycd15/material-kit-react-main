// @mui
import { Grid, Container, Typography } from '@mui/material';
// components
import { Box } from '@mui/system';
import Icon from '@mui/material/Icon';
import Page from '../components/Page';

// sections
import {
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Mis cursos
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Curso 1" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Curso 2" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Curso 3" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Typography variant="h4" sx={{ mb: 5 }}>
          Agregar más
        </Typography>
        </Grid>
      </Container>
    </Page>
  );
}
