import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZE} from '../utils';
import {MARGIN} from '../utils/styles';
import {IMAGES} from '../assets/images';
import {RootStackScreenProps} from '../navigatiors/root-navigator';
import SocialBtn from '../components/SocialBtn';
import Input from '../components/Input';

const SignIn2 = ({navigation}: RootStackScreenProps<'SINGIN-2'>) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'top']}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backBtn}>
        <Image
          resizeMode="cover"
          source={IMAGES['arrow-left']}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>
          Let's <Text style={styles.explore}>sign in</Text>
        </Text>
        <Text style={styles.desc}>
          quis nostrud exercitation ullamaco laboris ut
        </Text>
        <View style={styles.action}>
          <Input
            placeholder="Email"
            icon={
              <Image
                resizeMode="cover"
                source={IMAGES['solid-mail']}
                style={styles.inputIcon}
              />
            }
          />
          <Input
            placeholder="Password"
            secureTextEntry
            icon={
              <Image
                resizeMode="cover"
                source={IMAGES.password}
                style={styles.inputIcon}
              />
            }
          />
          <View style={styles.passwordWrapper}>
            <Text style={styles.passwordAction}>Forgot password?</Text>
            <Text style={styles.passwordAction}>Show password</Text>
          </View>
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
            Don't have an account?<Text style={styles.register}> Resiger</Text>
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
  backBtn: {
    marginTop: 2 * SIZE.heightPixel(12),
    marginLeft: MARGIN,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.GRAY_100,
    height: SIZE.widthPixel(50),
    width: SIZE.widthPixel(50),
    borderRadius: SIZE.widthPixel(30),
  },
  backIcon: {
    width: SIZE.widthPixel(16),
    height: SIZE.widthPixel(16),
  },
  action: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: MARGIN,
  },
  title: {
    fontSize: SIZE.fontPixel(32),
    fontWeight: '500',
  },
  explore: {
    fontWeight: 'bold',
    color: COLORS.MAIN,
  },
  desc: {
    fontSize: SIZE.fontPixel(12),
    color: COLORS.GRAY_500,
    marginVertical: SIZE.heightPixel(24),
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
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordAction: {
    fontSize: SIZE.fontPixel(16),
    fontWeight: '500',
    color: COLORS.MAIN,
  },
  inputIcon: {
    width: SIZE.widthPixel(18),
    height: SIZE.widthPixel(18),
  },
});

export default SignIn2;
