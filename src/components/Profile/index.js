import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Forms from "../Forms";
import { formData, initialData } from "./FormData";
import { Avatar, Button } from "@mui/material";
import profileimg from "../../images/profile.jpg";
import "./Profile.css";

const onSubmit = (data) => {
  console.log(data);
  alert("Sucessfully Sumbitted")
};

export default function Profile() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <div className="welcome">
            <div className="title">Good Morning, Adam</div>
            <div className="normal">April 28, 2022</div>
          </div>
          <div className="title" >My Profile</div>
          <div style={{ paddingTop: "25px" }}>
            <Paper>
              <Forms
                formData={formData}
                initialData={initialData}
                onSubmit={onSubmit}
              />
            </Paper>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <div style={{ display: "flex", padding: "10px" }}>
              <Button variant="contained" color="secondary">
                + Add Projects
              </Button>
              <div style={{ padding: "0px 10px 0px 30px" }}>
                <Avatar src={profileimg} />
              </div>
              <div className="profile">Adam</div>
            </div>
            <div>
              <div style={{ padding: "100px 30px 30px 30px" }}>
                <img alt={"profile"} src={profileimg} width="300" height="300" />
              </div>
              <div className="nameText">Adam Levine</div>
              <div className="emailText" style={{paddingBottom: "200px"}}>adamlevine@kyro.us</div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
