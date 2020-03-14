import React from "react";

import {HomepageContainer} from './Homepage.styles';
import Directory from "../../components/directory/Directory.component";

const Homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;
