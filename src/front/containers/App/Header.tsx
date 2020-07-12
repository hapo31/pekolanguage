import React from "react";
import { Box, Typography } from "@material-ui/core";

export default () => (
  <Typography>
    <h1>プログラミング言語『ぺこーら』 ~ Pekolanguage</h1>
    <p
      dangerouslySetInnerHTML={{
        __html: `
      <a href="https://twitter.com/intent/share?&ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="プログラミング言語『ぺこーら』 #Pekolanguage" data-url="https://happou31.github.io/pekolanguage/" data-hash-tag="Pekolanguage" data-related="usadapekora" data-show-count="false">Tweet #Pekolanguage</a>
    `,
      }}
    ></p>
  </Typography>
);
