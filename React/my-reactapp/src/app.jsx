import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './components/layout/index'
import Demo from './components/demo/index';
class app extends Component {

    render() {
        const layoutProps = {
            menuItemList: ['bar1', 'bar2', 'bar3'],
            store: this.props.store
        }
        return (
          <div>
              {/* <Layout {...layoutProps}/> */}
              <Demo />
          </div>
        );
    }
}


export default app;