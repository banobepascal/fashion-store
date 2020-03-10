import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Directory.styles.scss";

import MenuItem from "../menu-item/Menu-item.component";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div>
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  );
};

const mapToStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapToStateToProps)(Directory);
