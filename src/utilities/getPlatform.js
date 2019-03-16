import { Dimensions, Platform } from 'react-native';
import { Constants as ExpoConstants } from 'expo';

export function getPlatform() {
  const { height, width } = Dimensions.get('screen');

  const initial = {
    height,
    width,
    old: true,
    iphonex: false,
    iphonexr: false,
    note8: false,
    ipad: false,
    ipad2: false,
    ipad9each: false,
    OS: Platform.OS,
    androidl: false,
    android: false,
  };

  if (Platform.OS === 'ios') {
    if (height === 1366 || width === 1366) {
      return {
        ...initial,
        ipad2: true,
        old: false,
      };
    } if (height === 1024 && width === 768) {
      return {
        ...initial,
        ipad9each: true,
        old: false,
      };
    } if ((height === 1024 || height === 834) || (width === 1024 || width === 834)) {
      return {
        ...initial,
        ipad: true,
        old: false,
      };
    } if (height === 812 || width === 812) {
      return {
        ...initial,
        iphonex: true,
        old: false,
      };
    } if (height === 896 && width === 414) {
      return {
        ...initial,
        iphonexr: true,
        old: false,
      };
    }
  } else if (Platform.OS === 'android') {
    if (height === 640 || width === 360) {
      return {
        ...initial,
        androidl: true,
        old: false,
      };
    }
    if (height === 740 || width === 740) {
      return {
        ...initial,
        note8: true,
        old: false,
      };
    }
    return {
      ...initial,
      android: true,
    };
  }

  return initial;
}
