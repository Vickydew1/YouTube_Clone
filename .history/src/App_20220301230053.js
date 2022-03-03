import React from "react";
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";

import { SearchBar } from "./components/SearchBar";
import { VideoDetail } from "./components/VideoDetail";
import { VideoList } from "./components/VideoList";

class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {/*  {Search Bar}  */}
            </Grid>
            <Grid item xs={8}>
              {/*  {video detail}  */}
            </Grid>
            <Grid item xs={4}>
              {/*  {video List}  */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
