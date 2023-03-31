import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ROUTE_KEY} from '../navigatiors/route-key';
import {RootStackScreenProps} from '../navigatiors/root-navigator';
import {COLORS, SIZE} from '../utils';
import {SafeAreaView} from 'react-native-safe-area-context';

const ListScreen = ({navigation}: RootStackScreenProps<'ListScreen'>) => {
  const pagelist = React.useMemo(() => {
    return Object.keys(ROUTE_KEY).sort();
  }, []);

  return (
    <SafeAreaView edges={['bottom', 'top']} style={{flex: 1}}>
      {pagelist.map((e, i) => {
        if (e === 'ListScreen') {
          return null;
        }
        return (
          <TouchableOpacity
            style={{
              padding: SIZE.widthPixel(8),
              backgroundColor: COLORS.GRAY_200,
              marginBottom: SIZE.widthPixel(2),
            }}
            onPress={() => {
              navigation.navigate(e);
            }}
            key={`${i}`}>
            <Text>{e}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default ListScreen;
