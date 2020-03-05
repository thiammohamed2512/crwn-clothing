import React from 'react'
import { selectCollection } from '../../components/redux/shop/shop.selectors';
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection.item.component'

import './collection.styles.scss'

const collectionPage = ({collection}) =>{ 
    const { items, title} = collection;
    return (
    <div className='collection-page'>
        <h1 className="title"> {title}</h1> 
        <div className="items"> 
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)
}
const mapStateToProps = (state, ownProps) => ({ 
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(collectionPage);