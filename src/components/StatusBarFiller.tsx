import React from 'react';
import { View } from 'react-native';
import { onIOS } from 'src/utils/const';

const StatusBarFiller = () => (onIOS ? null : <View style={{ height: 24 }} />);

export default StatusBarFiller;
