import {PixelRatio} from 'react-native';
import {
  DESIGN_HEIGHT,
  DESIGN_WIDTH,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from './constants';

const widthBaseScale = SCREEN_WIDTH / DESIGN_WIDTH;
const heightBaseScale = SCREEN_HEIGHT / DESIGN_HEIGHT;

type BaseType = 'width' | 'height';

function normalize(size: number, based: BaseType = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};
//for font  pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};

export const SIZE = {
  widthPixel,
  heightPixel,
  fontPixel,
};
