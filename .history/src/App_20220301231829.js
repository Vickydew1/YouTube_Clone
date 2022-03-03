import React from "react";
// eslint-disable-next-line no-unused-vars
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail } from "./components";

// import { VideoList } from "./components/VideoList";

class App extends React.Component {
  render() {
    return (
      <Grid justifyContent="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
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
