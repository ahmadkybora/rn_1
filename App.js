import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { 
  Platform, 
  Dimensions, 
  TouchableOpacity, 
  TouchableHighlight, 
  ScrollView,
  FlatList,
  Alert, 
  // Button, 
  TextInput, 
  StyleSheet, 
  // Text,
  View, 
  ActivityIndicator 
  } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class App extends Component {

  state = {
    list: []
  }

  componentDidMount() {
    setTimeout(() => this.fillList(100), 1000)
  }

  fillList = (numberOfRows) => {
    const list = [...Array(numberOfRows)].map((x,i) => ({ key: `a${i}`}));
    this.setState({ list });
  }

  renderItem = (item) => {
    return(
      <TouchableOpacity
        onPress={() => Alert.alert(`you clicked`)}
        style={[styles.input, {backgroundColor: '#afe'}]}>
        <Text>{item.key}</Text>
      </TouchableOpacity>
    )
  }
  renderSeprator = () => <View style={{ height: 10, backgroundColor: '#D4AF37' }} />

  renderHeader = () => {
    const { height, width } = Dimensions.get('screen');
    const isProtrait = ( width < height ) ? true : false;
    const backgroundColor = (isProtrait) ? '#a9a9a9' : '#555eee';
    const headerText = (Platform.OS === 'ios') ? 'IOS' : 'Android';
    return(
      <View style={{ height: height/5, backgroundColor }}>
        <Text style={[ styles.welcome, { color: '#fff' }]}>Welcome to the {headerText} Header</Text>
      </View>
    )
  }

  renderFooter = () => {
    return(
      <View style={{ height: 100, backgroundColor: '#a9a9a9' }}>
        <Text style={[ styles.welcome, { color: '#fff' }]}>Welcome to the Footer</Text>
      </View>
    )
  }

  render() {
    return (
      <Text>a</Text>
      // <Container>
      // <Header>
      // <Left>
      // <Button transparent>
      // <Icon name="menu" />
      // </Button>
      // </Left>
      // <Body>
      // <Title>
      // Header
      // </Title>
      // </Body>
      // <Right>
      // <Icon name="add" />
      // </Right>
      // </Header>
      // <Content>
      // {
      //   (this.state.list.length) ?
      //   <FlatList
      //     style={{marginBottom: 50, marginTop: 50}}
      //     data={this.state.list}
      //     renderItem={({item}) => this.renderItem(item)}
      //     ItemSeparatorComponent={this.renderSeprator}
      //     ListHeaderComponent={this.renderHeader}
      //     ListFooterComponent={this.renderFooter}
      //     onEndReached={() => this.fillList(this.state.list.length + 50)}
      //     onEndReachedThreshold={0.1}
      //     /> 
      //     :
      //     <ActivityIndicator />
      // }
      // </Content>
      // <Footer>
      // <FooterTab>
      // <Button full>
      // <Text>Footer</Text>
      // </Button>
      // </FooterTab>
      // </Footer>
      // </Container>
      // <View style={styles.container}>
        /* <ScrollView
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
          centerContent
          maximumZoomScale={2}
          minimumZoomScale={1}
          >
            <TouchableHighlight>
              <Image 
                style={{ width: 300, height: 300 }}
                source={require('../assets/icon.png')}
                />
            </TouchableHighlight>
        </ScrollView> */
      //   {
      //     (this.state.list.length) ?
      //     <FlatList
      //       style={{marginBottom: 50, marginTop: 50}}
      //       data={this.state.list}
      //       renderItem={({item}) => this.renderItem(item)}
      //       ItemSeparatorComponent={this.renderSeprator}
      //       ListHeaderComponent={this.renderHeader}
      //       ListFooterComponent={this.renderFooter}
      //       onEndReached={() => this.fillList(this.state.list.length + 50)}
      //       onEndReachedThreshold={0.1}
      //       /> 
      //       :
      //       <ActivityIndicator />
      //   }
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
