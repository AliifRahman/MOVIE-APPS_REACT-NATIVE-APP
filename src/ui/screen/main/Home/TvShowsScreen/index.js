import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import IconM from 'react-native-vector-icons/MaterialIcons';
import {TMDB_API_KEY} from '@env';

import {Space, Input} from '../../../../components';
import {uiDimen, uiStyle, uiColor} from '../../../../constants';
import PopularSection from './components/PopularSection';
import TopRatedSection from './components/TopRatedSection';
import WhatsNewSection from './components/WhatsNewSection';
import api from '../../../../../helpers';

const TvShowsScreen = () => {
  const [search, setSearch] = useState('');
  const [popularData, setPopularData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const [whatNewsData, setWhatNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('Api Key TMDB', TMDB_API_KEY);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/tv/popular?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setPopularData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });

    api
      .get(`/tv/top_rated?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setTopRatedData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });

    api
      .get(`/tv/airing_today?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setWhatNewsData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <Space height={uiDimen.md} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../../assets/image/logo-128.png')}
          style={styles.logoImage}
        />
        <Space width={uiDimen.sm / 2} />
        <Text style={styles.logoText}>SINI NONTON</Text>
      </View>
      <Space height={uiDimen.md} />

      <View style={{marginHorizontal: uiDimen.lg}}>
        <Input
          fullCircle
          placeholder="Search ..."
          placeholderLeftIcon={
            <IconM name="search" color={uiColor.placeholder} size={16} />
          }
          value={search}
          onChange={(v) => setSearch(v)}></Input>
      </View>
      <Space height={uiDimen.md} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingText}>Tv Shows</Text>
        <Space height={uiDimen.sm} />

        {loading && (
          <View>
            <ActivityIndicator color="white" size="small">
              {loading}
            </ActivityIndicator>
          </View>
        )}

        <PopularSection data={popularData} />
        <Space height={uiDimen.lg} />

        <TopRatedSection data={topRatedData} />
        <Space height={uiDimen.lg} />

        <WhatsNewSection data={whatNewsData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    marginHorizontal: uiDimen.lg,
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  logoText: {
    ...uiStyle.textBold,
    fontSize: 18,
  },
  headingText: {
    ...uiStyle.textBold,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default TvShowsScreen;
