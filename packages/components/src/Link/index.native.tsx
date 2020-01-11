import React, { ReactChild, useCallback } from 'react'

import { useNavigation } from '@react-navigation/core'
import { TouchableOpacity } from 'react-native'

import { LinkProps } from './Link.models'

const Link = (props: LinkProps) => {
  const { path, params } = props;
  const navigation = useNavigation();

  const navigate = useCallback(() => {
    navigation.navigate(path, params);
  }, [path, params]);

  return (
    <TouchableOpacity accessibilityRole="button" onPress={navigate}>
      {props.children}
    </TouchableOpacity>
  );
};

export { Link };
