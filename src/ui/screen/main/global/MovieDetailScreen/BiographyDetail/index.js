import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TMDB_IMG_URL, TMDB_API_KEY, GOOGLE_YOUTUBE_API_KEY} from '@env';
import {withNavigation} from '@react-navigation/compat';

import {uiColor, uiDimen, uiStyle} from '../../../../../constants';
import {Space} from '../../../../../components';
import api from '../../../../../../helpers';
import MoviesCreditSection from './components/MoviesCreditSection';
import TvCreditSection from './components/TvCreditSection';

const BiographyDetailScreen = ({navigation, route}) => {
  const id = route.params.id;
  const [biography, setBiography] = useState(null);
  const [moviesCredit, setMovCredit] = useState([]);
  const [tvCredit, setTvCredit] = useState([]);

  useEffect(() => {
    api
      .get(`/person/${id}?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setBiography(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    api
      .get(`/person/${id}/movie_credits?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setMovCredit(res.data.cast);
      })
      .catch((err) => {
        console.log(err.message);
      });

    api
      .get(`/person/${id}/tv_credits?api_key=${TMDB_API_KEY}`)
      .then((res) => {
        setTvCredit(res.data.cast);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <SafeAreaView style={uiStyle.baseContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.btnBack}>
            <Icon name="arrow-back" size={24} color="white"></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.bgTransparancy} />
        <Image
          style={styles.bgCover}
          resizeMode="cover"
          source={{uri: `${TMDB_IMG_URL}${biography?.profile_path}`}}
        />
        <View style={styles.biographyContent}>
          <Text style={styles.biographyName}>{biography?.name}</Text>
          <Text style={styles.biographyDate}>
            ({biography?.birthday} until {biography?.deathday})
          </Text>
        </View>
      </View>

      <ScrollView
        style={styles.biographySection}
        showsVerticalScrollIndicator={false}>
        <Space height={uiDimen.xl} />
        <View style={{paddingHorizontal: uiDimen.lg}}>
          <Text style={styles.biographyText}>Biography</Text>

          <Space height={uiDimen.sm} />
          <Text style={styles.biographyDescription}>
            {biography?.biography}
          </Text>
        </View>

        <Space height={uiDimen.lg} />
        <MoviesCreditSection data={moviesCredit} />

        <Space height={uiDimen.lg} />
        <TvCreditSection data={tvCredit} />

        <Space height={uiDimen.lg} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 360,
    backgroundColor: 'red',
    position: 'relative',
  },
  headerButton: {
    position: 'absolute',
    width: '100%',
    padding: uiDimen.md,
    zIndex: 100,
  },
  btnBack: {
    backgroundColor: uiColor.bg,
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: uiDimen.sm,
  },
  bgTransparancy: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: uiColor.accent1,
    opacity: 0.8,
    zIndex: 50,
  },
  bgCover: {
    width: '100%',
    height: '100%',
    backgroundColor: uiColor.accent1,
    opacity: 0.8,
  },
  biographyContent: {
    position: 'absolute',
    zIndex: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 160,
  },
  biographyName: {...uiStyle.textBold, fontSize: 18},
  biographyDate: {...uiStyle.textRegular, fontSize: 16},
  biographySection: {
    flex: 1,
    backgroundColor: uiColor.bg,
    marginTop: -120,
    borderTopLeftRadius: uiDimen.lg,
    borderTopRightRadius: uiDimen.lg,
  },
  biographyText: {...uiStyle.textSemiBold, fontSize: 16},
  biographyDescription: {...uiStyle.textRegular, fontSize: 14},
  moviesText: {...uiStyle.textSemiBold, fontSize: 16},
  officialText: {...uiStyle.textRegular, fontSize: 14},
  tvshowsText: {...uiStyle.textSemiBold, fontSize: 16},
});

export default withNavigation(BiographyDetailScreen);
