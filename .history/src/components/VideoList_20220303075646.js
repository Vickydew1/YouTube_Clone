import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const listOfVideos = videos.map((videos) => <VideoItem />);

  return listOfVideos;
};

export default VideoList;
