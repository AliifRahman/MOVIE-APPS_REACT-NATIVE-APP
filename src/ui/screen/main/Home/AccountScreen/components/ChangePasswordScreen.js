import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from '@react-navigation/compat';
import {UserContext} from '../../../../../../commons/contexts/user';
import auth from '@react-native-firebase/auth';

import {Input, AccountButton, Space} from '../../../../../components';
import {uiDimen, uiStyle, uiColor} from '../../../../../constants';

const ChangePasswordScreen = ({navigation}) => {
  const {setUser} = useContext(UserContext);
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChangePassword = () => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (newPassword === '') {
      setError('Fields can not be empty');
      setLoading(false);
    } else {
      auth()
        .currentUser.updatePassword(newPassword)
        .then(() => {
          setUser(auth().currentUser);
          setLoading(false);
          setSuccess('Password updated succesfully');
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
  };

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <Space height={uiDimen.lg} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{position: 'absolute', left: uiDimen.lg}}>
          <Icon name="arrow-back" size={32} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            ...uiStyle.textBold,
            fontSize: 20,
          }}>
          Change Password
        </Text>
      </View>

      <Space height={uiDimen.lg * 2} />
      <View style={{marginHorizontal: uiDimen.lg}}>
        <Text style={{...uiStyle.textSemiBold, fontSize: 18}}>
          New Password
        </Text>
        <Space height={uiDimen.sm} />

        {error && (
          <>
            <View
              style={{
                padding: uiDimen.sm,
                backgroundColor: 'red',
                borderRadius: uiDimen.sm,
                opacity: 0.8,
              }}>
              <Text style={{...uiStyle.textSemiBold, fontSize: 14}}>
                {error}
              </Text>
            </View>
            <Space height={uiDimen.sm} />
          </>
        )}

        {success && (
          <>
            <View
              style={{
                padding: uiDimen.sm,
                backgroundColor: 'green',
                borderRadius: uiDimen.sm,
                opacity: 0.8,
              }}>
              <Text style={{...uiStyle.textSemiBold, fontSize: 14}}>
                {success}
              </Text>
            </View>
            <Space height={uiDimen.sm} />
          </>
        )}

        <Input
          secure
          value={newPassword}
          onChange={(v) => setNewPassword(v)}
          placeholder="Enter your new password"
        />

        <Space height={uiDimen.lg} />
        <AccountButton
          title="CHANGE"
          onPress={handleChangePassword}
          loadingButton={loading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 100,
  },
});

export default withNavigation(ChangePasswordScreen);
