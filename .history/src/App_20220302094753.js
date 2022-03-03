import React from "react";
import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";

import { SearchBar, VideoDetail } from "./components";

// import { VideoList } from "./components/VideoList";

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,
  };
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAXLDQR2yjJdQyC_Hruacd21UQA1x5q95Y",
        q: searchTerm,
      },
    });

    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    return (
      <Grid justifyContent="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={this.selectedVideo} />
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
