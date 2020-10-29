import React from 'react';
import { View } from 'react-native';
import { onIOS } from 'src/utils/const';

export const StatusBarFiller = () => (onIOS ? null : <View style={{ height: 24 }} />);
