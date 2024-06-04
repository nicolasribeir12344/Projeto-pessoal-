import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

export default function HomeScreen() {

  const [emailField, setEmailField] = useState('');
  const [email, setEmail] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('')
  const [cpfField, setCpfField]=useState('')
  const [name, setName] = useState('')
  const [nameField, setNameField]=useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordField, setNewPasswordField]=useState('')
  const [confiPassword, setConfiPassword] = useState('')
  const [confiPasswordField, setConfiPasswordField]=useState('')
  const [singUp, setSingUp] = useState('')
  const [singUpField, setSingUpField]=useState('')
  const [home, setHome] = useState('')
  const [homeField, setHomeField]=useState('')
  const [singIn, setSingIn] = useState('')
  const [singInField, setSingInField]=useState('')

  const handleForgotButton = () => {
    setPassword('newPassword');
  };
  //Função do botao Entrar
  const handleLoginButton = () => {
    if (emailField =='123' && cpfField =='123' && passwordField =='123'){
      setEmail(emailField);
      setCpf(cpfField);
      setPassword(passwordField);
    } else {
      alert('Dados incorretos ou usuário não cadastrado.')
    }
  };

  const handleConfirmeButton = () => {
      setPassword('0');
      setSingUp('0');
    if (nameField != '' && emailField !='' && cpfField !=''){
      setName(nameField)
      setEmail(emailField);
      setCpf(cpfField);
    } else {
      alert('Não encontramos essa conta tente novamente')
    }
  };

  //Função do Cadastre-se
  const handleSignUpButton = () => {
    setSingUp('singUp');
    setPassword('0');
  };

  const handleSingInButton = () => {
    setSingIn('singIn');
    setPassword('0');
  };

  const handleNewPasswordButton = () => {
    if(newPasswordField === confiPasswordField){
      alert('Nova Senha Confirmada Com Sucesso')
    }
  };

  const handleVolteButton = () => {
    setEmail('');
    setPassword('');
    setSingUp('0');
    setSingIn('0');
  };

  const handleHomeButton = () => {
    setHome('home');
    setPassword('0');
  };


  const navigation = useNavigation()

  const handleAboutClick = () => {
    navigation.navigate('About', {name: name})
    //navigation.navigate('About', {cor: name})
  }

  

  return (
     <ScrollView style={styles.scrollview}>
    {email == '' && password == '' && (
      <>
      <View style={styles.container}>
              <Image
                style={styles.logo}
                source={require('../icons8-bank-96.png')}
              />
              <Text style={styles.h1}>Criptocoins</Text>

              <View style={styles.inputSaldo}>
              <TouchableOpacity style={styles.buttonSingIn} onPress={handleAboutClick}>
                <Text style={styles.buttonText}>ENTRAR</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSingUp} onPress={handleSignUpButton}>
                <Text style={styles.buttonText}>CADASTRE-SE</Text>
              </TouchableOpacity>
              </View>
            </View>

      </>
      )}
       {email =='123' && cpf =='123' && password =='123' &&
        <>
          <ScrollView>
            <View style={styles.container}>
              <TouchableOpacity onPress={handleVolteButton}>
              <Image
                 style={styles.volte}
                 source={require('../icons8-undo-96.png')}
               />
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../icons8-bank-96.png')}
              />
              <Text style={styles.h1}>Criptocoins</Text>
              <Text style={styles.h2}>Seja Bem Vindo a Sua Conta</Text>
              <View style={styles.saldo}>
                <Text style={styles.total}>Saldo</Text>
                <Text style={styles.total1}>1.000.000.000</Text>
              </View>
            </View>
          </ScrollView>
        </>
       }
       {password == 'newPassword' && 
        <>
          <View style={styles.container}>
              <TouchableOpacity onPress={handleVolteButton}>
              <Image
                 style={styles.volte}
                 source={require('../icons8-undo-96.png')}
               />
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../icons8-bank-96.png')}
              />
              <Text style={styles.h1}>Criptocoins</Text>
              <Text style={styles.h2}>Esqueçeu sua senha </Text>

              <View style={styles.inputSaldo}>
                <View style={styles.inputArea}>
                <Text style={styles.inputNewpassword}>Nome Completo</Text>
                <TextInput style={styles.inputFieldNewpassword} placeholder='Digite seu Nome Comapleto'
                placeholderTextColor ='#83006F'
                value={nameField}
                onChangeText={t => setNameField(t)}
                autoCapitalize='none'
                keyboardType='email-address'
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.inputFieldNewpassword1} 
                placeholder='Exemplo@gmail.com' 
                placeholderTextColor ='#83006F'
                value={emailField}
                onChangeText={t => setEmailField(t)}
                autoCapitalize='none'
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>CPF</Text>
                <TextInput style={styles.inputFieldNewpassword} 
                placeholder='000.000.000-00' 
                placeholderTextColor ='#83006F'
                value={cpfField}
                onChangeText={t => setCpfField(t)}
                autoCapitalize='none'
                />
              </View>
              
              <TouchableOpacity style={styles.button} onPress={handleConfirmeButton}>
                <Text style={styles.buttonText}>Comfirme</Text>
              </TouchableOpacity>
              </View>
            </View>
       </>
      }

      {name !='' && email !='' && cpf !='' &&  
        <>
          <View style={styles.container}>

              <TouchableOpacity onPress={handleVolteButton}>
              <Image
                 style={styles.volte}
                 source={require('../icons8-bank-96.png')}
               />
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../icons8-bank-96.png')}
              />
              <Text style={styles.h1}>Criptocoins</Text>
              <Text style={styles.h2}>Crie Sua Nova Senha</Text>

              <View style={styles.inputSaldo}>
                <View style={styles.inputArea}>
                <Text style={styles.inputNewpassword}>Nova Senha</Text>
                <TextInput style={styles.inputFieldNewpassword} placeholder='********'
                placeholderTextColor ='#83006F'
                value={newPasswordField}
                onChangeText={t => setNewPasswordField(t)}
                autoCapitalize='none'
                keyboardType='email-address'
                secureTextEntry
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Confirmar Senha</Text>
                <TextInput style={styles.inputFieldConfirNewpassword} 
                placeholder='********' 
                placeholderTextColor ='#83006F'
                value={confiPasswordField}
                onChangeText={t => setConfiPasswordField(t)}
                autoCapitalize='none'
                secureTextEntry
                />

              <TouchableOpacity style={styles.button} onPress={handleNewPasswordButton}>
                <Text style={styles.buttonText}>Confirme</Text>
              </TouchableOpacity>

              </View>
              </View>
            </View>
       </>
      }
      {singUp == 'singUp' && 
        <>
          <View style={styles.container}>
          
              <TouchableOpacity onPress={handleVolteButton}>
              <Image
                 style={styles.volte}
                 source={require('../icons8-bank-96.png')}
               />
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../icons8-bank-96.png')}
              />
              <Text style={styles.h1}>Criptocoins</Text>
              <Text style={styles.h2}>Cadastre-se Aqui</Text>

              <View style={styles.inputSaldo}>
                <View style={styles.inputArea}>
                <Text style={styles.inputNewpassword}>Nome Completo</Text>
                <TextInput style={styles.inputFieldNewpassword} placeholder='Digite seu Nome Completo'
                placeholderTextColor ='#83006F'
                value={nameField}
                onChangeText={t => setNameField(t)}
                autoCapitalize='none'
                keyboardType='email-address'
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.inputFieldNewpassword1} 
                placeholder='Exemplo@gmail.com' 
                placeholderTextColor ='#83006F'
                value={emailField}
                onChangeText={t => setEmailField(t)}
                autoCapitalize='none'
                />
              </View>

              <View style={styles.inputNewpassword}>
                <Text style={styles.inputLabel}>CPF</Text>
                <TextInput style={styles.inputFieldNewpassword} 
                placeholder='000.000.000-00' 
                placeholderTextColor ='#83006F'
                value={cpfField}
                onChangeText={t => setCpfField(t)}
                autoCapitalize='none'
                />
              </View>
              
              <TouchableOpacity style={styles.button} onPress={handleConfirmeButton}>
                <Text style={styles.buttonText}>Confirme</Text>
              </TouchableOpacity>
              </View>
            </View>
       </>
      }

      {singIn == 'singIn' && 
        <>
          <View style={styles.container}>
              <TouchableOpacity onPress={handleVolteButton}>
              <Image
                 style={styles.volte}
                 source={require('../icons8-undo-96.png')}
               />
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../icons8-bank-96.png')}
              />
              <Text style={styles.h1}>Criptocoins</Text>

            </View>
       </>
      }
    </ScrollView>
  )
}
