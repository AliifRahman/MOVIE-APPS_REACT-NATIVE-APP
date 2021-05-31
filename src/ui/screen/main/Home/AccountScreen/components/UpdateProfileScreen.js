import React, {useContext, useState} from 'react';
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

const UpdateProfileScreen = ({navigation}) => {
  const {user, setUser} = useContext(UserContext);
  const [name, setName] = useState(user.displayName);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateProfile = () => {
    setError(null);
    setLoading(true);

    if (name === '') {
      setError('Fields can not be empty');
    } else {
      auth()
        .currentUser.updateProfile({displayName: name})
        .then(() => {
          setUser(auth().currentUser);
          setLoading(false);
          navigation.goBack();
        })
        .catch((err) => {
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
          Update Profile
        </Text>
      </View>

      <Space height={uiDimen.lg * 2} />
      <View style={{marginHorizontal: uiDimen.lg}}>
        <Text style={{...uiStyle.textSemiBold, fontSize: 18}}>Name</Text>
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

        <Input
          value={name}
          onChange={(v) => setName(v)}
          placeholder="Enter your name"
        />

        <Space height={uiDimen.lg} />
        <AccountButton
          title="UPDATE"
          onPress={handleUpdateProfile}
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

export default withNavigation(UpdateProfileScreen);
