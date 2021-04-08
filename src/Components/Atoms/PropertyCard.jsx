import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Image from "../../Resource/images/test.jpeg";
import Typography from "@material-ui/core/Typography";
const PropertyCard = ({ property }) => {
  return (
    <Paper elevation={3}>
      <Box p={1}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          item
          xs
        >
          <Grid item xs={4}>
            <CardMedia
              image={Image}
              title="Paella dish"
              style={{ height: "200px" }}
            />
          </Grid>
          <Divider orientation="vertical" flexItem={true} />
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="flex-start"
            item
            xs={7}
          >
            <Grid item xs>
              <Typography variant="h5" component="div">
                {property.title}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle2" component="p">
                Property Type: {property.type}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle2" component="p">
                Address:{" "}
                {`${property.address.street}, ${property.address.city}, ${property.address.state}, ${property.address.country}`}
              </Typography>
            </Grid>
            <Grid item xs>
              <button>upvote</button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PropertyCard;
