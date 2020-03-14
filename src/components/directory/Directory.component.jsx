import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { DirectoryMenuContainer} from "./Directory.styles";

import MenuItem from "../menu-item/Menu-item.component";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div>
      <DirectoryMenuContainer>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </DirectoryMenuContainer>
    </div>
  );
};

const mapToStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapToStateToProps)(Directory);
