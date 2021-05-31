import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import auth from '@react-native-firebase/auth';

import {Space, Input, Button} from '../../../components';
import {uiStyle, uiDimen} from '../../../constants';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSingIn = () => {
    setError(null);
    setLoading(true);
    if (email === '' || password === '') {
      setError('all fields can not be empty');
      setLoading(false);
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
          console.log('sukses login');
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  };

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <View style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Space height={uiDimen.lg}></Space>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../../assets/image/logo-128.png')}></Image>
            <Space height={uiDimen.md}></Space>
            <Text style={styles.title}>Sini Nonton</Text>
          </View>
          <Space height={uiDimen.sm * 5}></Space>

          <Text style={styles.subtitle}>Sign in your account</Text>
          <Space height={uiDimen.lg} />

          {error && (
            <>
              <View style={styles.errorDisplay}>
                <Text style={{...uiStyle.textSemiBold, fontSize: 14}}>
                  {error}
                </Text>
              </View>
              <Space height={uiDimen.sm} />
            </>
          )}

          <Text style={styles.label}>Email</Text>
          <Space height={uiDimen.sm}></Space>
          <Input
            placeholder="Email"
            value={email}
            onChange={(v) => setEmail(v)}></Input>
          <Space height={uiDimen.lg}></Space>

          <Text style={styles.label}>Password</Text>
          <Space height={uiDimen.sm}></Space>
          <Input
            placeholder="Password"
            value={password}
            onChange={(v) => setPassword(v)}
            secure></Input>
          <Space height={uiDimen.lg}></Space>

          <Space height={uiDimen.sm}></Space>
          <Button
            title={'Sign In'}
            onPress={handleSingIn}
            loadingButton={loading}></Button>
          <Space height={uiDimen.md}></Space>

          <Text style={styles.question}>Don't have an account</Text>
          <Space height={uiDimen.md}></Space>
          <Button
            outlined
            title={'Sign Up'}
            onPress={() => {
              navigation.navigate('SignUp');
            }}></Button>
          <Space height={uiDimen.lg}></Space>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: uiDimen.lg,
  },

  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {...uiStyle.textBold, fontSize: 24},
  subtitle: {...uiStyle.textRegular, fontSize: 20},
  label: {...uiStyle.textSemiBold, fontSize: 16},
  question: {
    ...uiStyle.textRegular,
    fontSize: 16,
    textAlign: 'center',
  },
  errorDisplay: {
    padding: uiDimen.sm,
    backgroundColor: 'red',
    borderRadius: uiDimen.md,
    opacity: 0.8,
  },
});
