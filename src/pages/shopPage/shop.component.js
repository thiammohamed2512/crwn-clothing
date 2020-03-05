import React from 'react'; 
import {Route} from 'react-router-dom';
import collectionOverview from '../../components/collection-overview/collection-overview.component'
import collectionPage from '../collection/collection.component';

const ShopPage =  ({match}) => {
    console.log(match,'match');
    return(
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={collectionOverview}  />
        <Route  path={`${match.path}/:collectionId`} component={collectionPage}  /> 
    </div>
)}

export default ShopPage;