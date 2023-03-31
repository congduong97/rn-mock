import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SCREEN_WIDTH, SIZE} from '../utils';
import {IMAGES} from '../assets/images';
import {MARGIN} from '../utils/styles';
import SocialBtn from '../components/SocialBtn';
import PrimaryBtn from '../components/PrimaryBtn';

const SignIn1 = () => {
  const imageList = useMemo(() => {
    return [IMAGES.signIn1, IMAGES.signIn2, IMAGES.signIn3, IMAGES.signIn4];
  }, []);
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageWraper}>
          {imageList.map((img, index) => {
            return (
              <Image
                resizeMode="cover"
                key={index + ''}
                source={img}
                style={styles.image}
              />
            );
          })}
        </View>
        <View style={styles.action}>
          <Text style={styles.title}>
            Ready to <Text style={styles.explore}>explore</Text>?
          </Text>
          <PrimaryBtn
            title="Continue with Email"
            icon={
              <Image
                resizeMode="cover"
                source={IMAGES.email}
                style={styles.icon}
              />
            }
            onPress={() => {}}
          />
          <View style={styles.orWrapper}>
            <View style={styles.dash} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.dash} />
          </View>
          <View style={styles.buttonWrapper}>
            <SocialBtn
              onPress={() => {}}
              icon={
                <Image
                  resizeMode="cover"
                  source={IMAGES.google}
                  style={styles.icon}
                />
              }
            />
            <SocialBtn
              onPress={() => {}}
              icon={
                <Image
                  resizeMode="cover"
                  source={IMAGES.facebook}
                  style={styles.icon}
                />
              }
            />
          </View>
          <Text style={styles.registerGuide}>
            Don't have an account?<Text style={styles.register}> Register</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: MARGIN,
    paddingTop: 2 * MARGIN,
  },
  imageWraper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: (SCREEN_WIDTH - 3 * MARGIN) / 2,
    height: (SCREEN_WIDTH - 3 * MARGIN) / 2,
    marginBottom: MARGIN,
    borderRadius: MARGIN,
  },
  action: {
    paddingBottom: MARGIN,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: SIZE.fontPixel(20),
    fontWeight: '500',
    marginBottom: SIZE.heightPixel(50),
  },
  explore: {
    fontWeight: 'bold',
    color: COLORS.MAIN,
  },
  registerGuide: {
    fontSize: SIZE.fontPixel(12),
    textAlign: 'center',
    marginTop: SIZE.heightPixel(50),
  },
  register: {
    fontWeight: 'bold',
    color: COLORS.MAIN,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: SIZE.widthPixel(32),
    height: SIZE.widthPixel(32),
  },
  dash: {
    height: SIZE.widthPixel(2),
    width: '42%',
    backgroundColor: COLORS.GRAY_100,
  },
  orWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZE.heightPixel(50),
  },
  or: {
    fontSize: SIZE.widthPixel(14),
    color: COLORS.GRAY_400,
    fontWeight: '500',
  },
});

export default SignIn1;
