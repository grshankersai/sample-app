import { Grid } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";


function App() {
  const [showDumbPage, setShowDumbPage] = useState(false);
  let [counter, setCounter] = useState(-1);

  let stylesArray = [
    {
      position: "absolute",
      top: "100px",
      left: "5px",
    },
    {
      position: "absolute",
      bottom: "30px",
      right: "50px",
    },
    {
      position: "absolute",
      top: "200px",
      right: "5px",
    },
    {
      position: "absolute",
      bottom: "10px",
      right: "100px",
    },
    {
      position: "absolute",
      top: "90px",
      right: "100px",
    },
    {
      position: "absolute",
      bottom: "30px",
      left: "50px",
    },
  ];

  return showDumbPage ? (
    <Grid
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <Grid container justifyContent="center" xs={12}>
        <h1>Ade Ade, I knew It Such a Dumb PIG You are, Adavi dunnapothu</h1>
      </Grid>

      <Grid xs={12} container justifyContent="center">
        <Button
          variant="contained"
          onClick={() => {
            setShowDumbPage(false);
          }}
        >
          Go Back because ur dumb!
        </Button>
      </Grid>
    </Grid>
  ) : (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <Grid container>
        <Grid
          xs={12}
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
          {" "}
          <h1>Are you Dumb?</h1>
        </Grid>
        <Grid xs={12} container justifyContent="center">
          <Button
            variant="contained"
            onClick={() => {
              setShowDumbPage(true);
            }}
            style={{ marginRight: "20px" }}
          >
            Yes
          </Button>

          <Button
            variant="contained"
            style={stylesArray[counter]}
            onClick={() => {
              setCounter((prev) => {
                return (prev + 1) % stylesArray.length;
              });
            }}
          >
            No
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
