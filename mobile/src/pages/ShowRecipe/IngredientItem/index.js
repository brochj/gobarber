import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class IngredientItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.stylesHeader = StyleSheet.create({
      section: {
        fontWeight: 'bold',
        color: '#196a65',
        fontSize: 20,
        // backgroundColor: 'red',
        paddingVertical: 5,
        paddingHorizontal: 10,
        textTransform: 'capitalize',
      },
    });
    this.stylesItem = StyleSheet.create({
      rowView: {
        flexDirection: 'row',
        paddingLeft: 10,
      },
      item: {
        flex: 1,
        fontSize: 18.5,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'justify',
      },
      separator: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        height: 0.9,
        paddingHorizontal: 20,
        marginVertical: 10,
      },
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={this.stylesItem.rowView}>
          <Icon name="circle-medium" color="#196a65" size={25} />
          {typeof this.props.data.unit === 'string' ? (
            <Text style={this.stylesItem.item}>
              {this.props.data.item} ({this.props.data.quantity}
              {this.props.data.unit})
            </Text>
          ) : (
            <Text style={this.stylesItem.item}>{this.props.data.item}</Text>
          )}
        </View>
        <View style={this.stylesItem.separator} />
      </View>
    );
  }
}
