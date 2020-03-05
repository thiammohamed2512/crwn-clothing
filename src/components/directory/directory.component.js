import React from 'react'
import { connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectDirectorySections } from '../redux/directory-reducer/directory.selector'
import  MenuItem  from '../menu-item/menu-item.component';

const Directory = ({ section }) => (
        <div className="directory-menu">
          { section.map(({id, ...ohterSectionProps }) => {
            return (
              <MenuItem key={id} {...ohterSectionProps} />
            )}
          )}
        </div>
)


const mapStateToProps = createStructuredSelector({ 
  section: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);