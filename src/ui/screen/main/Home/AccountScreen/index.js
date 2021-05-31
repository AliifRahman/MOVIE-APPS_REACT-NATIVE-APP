import React, {useContext} from 'react';
import {SafeAreaView, Text, View, Alert} from 'react-native';

import {UserContext} from '../../../../../commons/contexts/user';
import {Space, AccountButton} from '../../../../components/';
import auth from '@react-native-firebase/auth';
import {uiDimen, uiStyle} from '../../../../constants';
import {withNavigation} from '@react-navigation/compat';

const AccountScreen = ({navigation}) => {
  const {user} = useContext(UserContext);

  const handleSignOut = () => {
    auth().signOut();
  };

  const aboutAlert = () => {
    Alert.alert(
      'About App',
      'Aplikasi Sini Nonton dibuat menggunakan React Native, di dalamnya memuat Daftar film dengan Kategori Movies dan TV Shows yang mana daftar film ini diambil menggunakan API dari TMDB Movies',
    );
  };

  const hireMeAlert = () => {
    Alert.alert(
      'Hire Me',
      'Muzammil, saya seorang Programmer Front End Mobile App, saya tinggal di Bangkalan, Jawa Timur',
    );
  };

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <Space height={uiDimen.md} />
      <Text style={{...uiStyle.textBold, fontSize: 20, textAlign: 'center'}}>
        Account
      </Text>
      <Space height={uiDimen.md} />

      <View style={{marginHorizontal: uiDimen.lg}}>
        <Text style={{...uiStyle.textSemiBold, fontSize: 18}}>
          Hallo {user?.displayName},
        </Text>
        <Text style={{...uiStyle.textRegular, fontSize: 16}}>
          Have a nice day
        </Text>
      </View>
      <Space height={uiDimen.xl} />

      <View style={{marginHorizontal: uiDimen.lg}}>
        <AccountButton
          accountOutlined
          title="Update Profile"
          onPress={() => {
            navigation.navigate('UpdateProfile');
          }}
        />
        <Space height={uiDimen.md} />

        <AccountButton
          accountOutlined
          title="Change Password"
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
        />
        <Space height={uiDimen.md} />

        <AccountButton accountOutlined title="About App" onPress={aboutAlert} />
        <Space height={uiDimen.md} />

        <AccountButton accountOutlined title="Hire Me" onPress={hireMeAlert} />
        <Space height={uiDimen.lg * 2} />

        <AccountButton title="LOGOUT" onPress={handleSignOut} />
      </View>
    </SafeAreaView>
  );
};

export default withNavigation(AccountScreen);
