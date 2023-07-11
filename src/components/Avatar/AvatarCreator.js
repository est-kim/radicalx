import "./styles.css";
import LoadAvatar from "./LoadAvatar";
import {
  AvatarCreatorViewer,
  AvatarCreator,
} from "@readyplayerme/rpm-react-sdk";
import { useState, useEffect } from "react";

const loadingNode = (
  <div
    style={{
      height: "100%",
      width: "100%",
      color: "white",
      backgroundColor: "black",
      textAlign: "center",
      marginTop: 100,
    }}
  >
    Loading Avatar...
  </div>
);

export default function AvatarCreatorComponent({ onAvatarData }) {
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");

  const handleAvatarExported = (url) => {
    setUrl(url);
  };

  const handleUserSet = (id) => {
    setId(id);
  };

  console.log("AC url", url);

  const editorConfig = {
    bodyType: "fullbody",
    clearCache: true,
  }

  const avatarConfig = {
      quality: "low",
      meshLod: 2,
      textureAtlas: 256,
      useHands: false,
      pose: "A"
  }

  const viewerConfig = {
    shadows: true,
    bodyType: "halfbody",
    style: {
      backgroundColor: "black",
    },
  }

  return (
    <div className="App">
      {/* <div>
        console.log("this is avatarcreator")
        <AvatarCreator subdomain="demo" />
      </div> */}
      <div className="container">
        <AvatarCreator
          subdomain="radicalx"
          onAvatarExported={handleAvatarExported}
          onUserSet={handleUserSet}
          editorConfig={editorConfig}
          avatarConfig={avatarConfig}
          viewerConfig={viewerConfig}
          loadingNode={loadingNode}
        />
      </div>
      <div>
        <b>Avatar URL:</b> {`${url}`}
      </div>
      <div>
        <b>User ID:</b> {`${id}`}
      </div>
      <div>
        <LoadAvatar url={url} id={id} />
      </div>
    </div>
  );
}
