import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export default function Forms(props) {
  const { formData, initialData, onSubmit } = props;
  const [inputData, setInputData] = useState(initialData);
  const handleChange = (data) => {
    setInputData({ ...inputData, [data.target.name]: data.target.value });
  };
  return (
    <div>
      <Grid container spacing={3} style={{ padding: "25px" }}>
        {formData.map((item) => {
          if (item.field === "text") {
            return (
              <Grid item xs={6} style={{ padding: "10px" }}>
                <TextField
                  id="outlined-name"
                  label={item.label}
                  value={inputData[item.value]}
                  name={item.value}
                  onChange={(e) => handleChange(e, item.value)}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            );
          }
          return <div></div>;
        })}
      </Grid>
      <div style={{ paddingBottom: "25px" }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ padding: "10px" }}
          onClick={() => onSubmit(inputData)}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
