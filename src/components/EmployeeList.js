import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchEmployeesList } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployeesList();
  }

  render() {
    return (
      <View>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}

export default connect(null, { fetchEmployeesList })(EmployeeList);
