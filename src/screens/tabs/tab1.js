import React, { Component } from 'react';
import { Container, Content, List } from 'native-base';
import { Alert, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { getArticles } from '../../services/news';
import DataItems from '../../components/dataItems';
export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {
        articles: []
      },
    }
  }
  async componentDidMount() {
    let data = await getArticles();
    this.setState({
      data: data
    });

  };

  _listEmptyComponent = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
          <Text style={{ marginTop: 10 }} children="Please Wait.." />
      </View>
  )
  }

  _renderItem = (item) => {
    return (
      <DataItems data={item.item} />
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <FlatList extraData={this.state.data.articles}
            data={this.state.data.articles}
            ListEmptyComponent={this._listEmptyComponent}
            renderItem={this._renderItem} />
        </Content>
      </Container>
    );
  }
}