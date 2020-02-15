import React, { Component } from 'react'; 
import SHOP_DATA from './shop.data'
import CollectionPreview from '../collection/collection-preview';

 class shop extends Component { 
     constructor(props){
         super(props); 
         this.state = {
             collections : SHOP_DATA
         }
     }
    render() { 
        const {collections} = this.state;
        return (
            <div>
                 <h1> shop page </h1>  
                {
                    collections.map(({id, ...otherCollectionsProps}) => ( 
                     <CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                } 
            </div>
        )
    }
}
export default shop;