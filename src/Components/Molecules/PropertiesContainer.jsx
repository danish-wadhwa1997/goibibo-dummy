import React from "react";
import { getProperties } from "../../Services/API";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PropertyCard from "../Atoms/PropertyCard";

const PropertiesContainer = () => {
  const [properties, setProperties] = React.useState([]);
  React.useEffect(() => {
    getProperties()
      .then((res) => {
        if (res.status === 200) {
          setProperties(res.data);
        }
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Box p={3}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={3}
      >
        {properties &&
          properties.map((property) => {
            return <PropertyCard property={property} key={property.id} />;
          })}
      </Grid>
    </Box>
  );
};

export default PropertiesContainer;
