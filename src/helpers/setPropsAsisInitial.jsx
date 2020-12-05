import React, { Component } from 'react';

 export const setPropsAsisInitial = WrappedComponent => (
      class extends Component {
        render() {
          return <WrappedComponent { ...this.props } initialValues={ this.props }/>;

        }


      }
);
