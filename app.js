import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';


const Tela1Route = () => (
  <View style={[styles.scene, { backgroundColor: '#f4eb22' }]}>
       <Image source={require('./assets/snapi-removebg-preview.png')} style={styles.image, {width: 300, height: 300, alignSelf: 'center'}} />
      <TouchableOpacity style={[styles.button, { backgroundColor: '#f23c54', bottom: -300, alignSelf: 'center', marginTop: 20, width: 300, height: 70, borderRadius: 5 }]}>
        <Text style={[styles.buttonText, { textTransform: 'uppercase', textAlign: 'center', fontSize: 45, color: 'white' }]}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#0dabfa', position: 'absolute', bottom: 20, alignSelf: 'center', marginTop: 20, width: 300, height: 70, borderRadius: 5 }]}>
        <Text style={[styles.buttonText, { textTransform: 'uppercase', textAlign: 'center', fontSize: 45, color: 'white' }]}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );


const Tela2Route = () => (
      <View style={[styles.scene, { backgroundColor: '#f4eb22' }]}>
      <View style={styles.card}>
        <Image source={require('./assets/snapi-removebg-preview.png')} style={styles.image, {width: 200, height: 200, alignSelf: 'center'}} />
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuário ou E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );




const Tela3Route = () => (
 <View style={[styles.scene, { backgroundColor: '#f4eb22' }]}>
       <Image source={require('./assets/snapi-removebg-preview.png')} style={styles.image, {width: 300, height: 300, alignSelf: 'center'}} />
      <Text style={styles.title}>Creat Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );


const Tela4Route = () => (
 <View style={[styles.scene, { backgroundColor: '#f4eb22' }]}>
      <View style={styles.card}>
        <Image source={require('./assets/snapi-removebg-preview.png')} style={styles.image, {width: 200, height: 200, alignSelf: 'center'}} />
        <Text style={styles.title}>Confirme seu e-mail</Text>
        <Text style={styles.description}>
          Enviamos um link de confirmação para o seu e-mail. Por favor, verifique sua caixa de entrada e clique no link para confirmar seu e-mail.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Reenviar E-mail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


const renderTabBar = props => (
  <TabBar
    {...props}
    renderIcon={({ route, focused, color }) => (
      <Icon name="smartphone" size={24} color={color} />
    )}
    tabStyle={{ flexDirection: 'row' }}
    style={{ backgroundColor: '#8FCFF2' }}
  />
);




export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Tela1' },
      { key: 'second', title: 'Tela2' },
      { key: 'third', title: 'Tela3' },
      { key: 'four', title: 'Tela4' },
    ],
  };


  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: Tela1Route,
          second: Tela2Route,
          third: Tela3Route,
          four: Tela4Route,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
        renderTabBar={renderTabBar}
      />
    );
  }


}


const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
