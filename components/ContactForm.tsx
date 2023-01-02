import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Button,
  TextField,
} from "@mui/material";

export default function ContactForm() {
  return (
    <>
      <Box component="div" sx={{ pb: 2 }}>
        <Grid container>
          <Grid item xs={12}>
            <TextField label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              minRows="3"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>
    </>
  );
}
