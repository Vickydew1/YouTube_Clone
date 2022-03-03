import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const listOfVideos = videos.map((videos) => <VideoItem />);

  return <h1>Video List</h1>;
};

export default VideoList;
