import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class StepsSection extends React.Component {
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

  renderSectionHeader(section) {
    return (
      <View>
        <Text style={this.stylesHeader.section}>{section.title}</Text>
      </View>
    );
  }

  renderItem(item) {
    return (
      <View style={{ flex: 1 }}>
        <View style={this.stylesItem.rowView}>
          <Icon name="circle-medium" color="#196a65" size={25} />
          <Text style={this.stylesItem.item}>{item.text}</Text>
        </View>
        {typeof item.tip === 'string' && (
          <Text style={this.stylesItem.item}>{item.tip}</Text>
        )}
        <View style={this.stylesItem.separator} />
      </View>
    );
  }

  render() {
    return (
      <SectionList
        sections={this.props.data}
        renderSectionHeader={({ section }) => this.renderSectionHeader(section)}
        renderItem={({ item }) => this.renderItem(item)}
        stickySectionHeadersEnabled
      />
    );
  }
}
