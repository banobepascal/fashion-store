import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Collections-Overview.styles.scss";
import CollectionPreview from "../collection-preview/CollectionPreview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";


const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
