import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../addresscard/AddressCard";

const DeliveryAddressForm = () => {


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e);
        const address = {
            firstName : data.get("firstName"),
            lastName : data.get("lastName"),
            streetAddress : data.get("address"),
            city : data.get("city"),
            state : data.get("state"),
            zipCode : data.get("zip"),
            mobile : data.get("phoneNumber"),
        }

        console.log("address", address  )
    }
  return (
    <div className="flex w-[50rem] ">
      <Grid container xs={12} lg={5} spacing={4}>
        <Grid className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b  cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "red" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Box className="border rounden-s-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="firstName"
                  fullWidth
                  autoComplete="Enter Firstname"
                  id="firstName"
                  name="firstName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="lastName"
                  fullWidth
                  autoComplete="Enter Lastname"
                  id="lastName"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  label="address"
                  fullWidth
                  autoComplete="Enter Address"
                  id="address   "
                  name="address "
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="city"
                  fullWidth
                  autoComplete=""
                  id="city"
                  name="city"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="State/Province/Region"
                  fullWidth
                  autoComplete="Enter Lastname"
                  id="state"
                  name="state"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Zip/Postal Code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  id="zip"
                  name="zip "
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="phoneNumber"
                  fullWidth
                  autoComplete="Phone Number"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </Grid>
              <Grid item xs={12} sm={6} >
              <Button
              sx={{ mt: 2, bgcolor: "red" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>

              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
