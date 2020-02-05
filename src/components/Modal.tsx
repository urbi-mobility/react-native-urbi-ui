import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewStyle, ImageRequireSource, Image, Text } from 'react-native';
import { DoubleChoice } from './DoubleChoice';
import { colors } from '../utils/colors';
import { withPixelDensity } from '../utils/functions';
import { registeredTextStyle } from '../utils/textStyles';
import { Button } from 'src/molecules/buttons/Button';

const styles = StyleSheet.create({
  Wrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 666,
  } as ViewStyle,
  Modal: {
    backgroundColor: colors.ulisse,
    borderRadius: 10,
    width: 304,
  },
  UpperWrapper: {
    paddingTop: 20,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomWrapper: {
    minHeight: 60,
    alignItems: 'center',
  },
  ImageWrapper: {
    marginBottom: 16,
  },
  Image: {
    height: 108,
  },
  Title: {
    ...registeredTextStyle('titleBold'),
    marginBottom: 8,
    textAlign: 'center',
  },
  Text: {
    ...registeredTextStyle('body'),
    marginBottom: 20,
    textAlign: 'center',
  },
});

type ModalProps = {
  show: boolean;
  image?: ImageRequireSource | string;
  title: string;
  text: string;
  actions: ReactElement<typeof DoubleChoice> | ReactElement<typeof Button>;
};

export const ModalUnmemoized = (props: ModalProps) =>
  props.show ? (
    <View style={styles.Wrapper}>
      <View style={styles.Modal}>
        <View style={styles.UpperWrapper}>
          {props.image && (
            <Image
              source={
                typeof props.image === 'string'
                  ? { uri: withPixelDensity(props.image) }
                  : props.image
              }
              resizeMode="contain"
              style={styles.Image}
            />
          )}
          <Text style={styles.Title}>{props.title.toUpperCase()}</Text>
          <Text style={styles.Text}>{props.text}</Text>
        </View>
        <View style={styles.BottomWrapper}>{props.actions}</View>
      </View>
    </View>
  ) : (
    undefined
  );

export const Modal = React.memo(ModalUnmemoized);
