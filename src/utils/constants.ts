import {Dimensions, Platform} from 'react-native';

export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

export const DESIGN_WIDTH = 375;
export const DESIGN_HEIGHT = 812;

export const STORAGE_KEY = {
  LIST_SEARCH: 'LIST_SEARCH',
};

export const PAGE_SIZE = 10;

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
