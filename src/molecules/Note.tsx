import React from 'react';
import { Image, ImageRequireSource, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { MaybeTouchable } from 'src/components/MaybeTouchable';
import { Testable } from 'src/types';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 12,
  } as ViewStyle,
  Image: {
    flexBasis: 'auto',
    flexGrow: 0,
    width: 40,
    height: 40,
    marginRight: 8,
  },
  Text: {
    flex: 1,
  },
});

interface NoteProps extends Testable {
  icon?: ImageRequireSource;
  text: string;
  textColor?: string;
  onPress?: () => any;
  onDarkBg?: boolean;
  backgroundColor?: string;
}

const textStyle = registeredTextStyle('micro', colors.ughina, 'note');

export const NoteUnmemoized = (props: NoteProps) => (
  <MaybeTouchable
    onPress={props.onPress}
    withShadow={false}
    backgroundColor={props.backgroundColor}
    testID={props.testID}
  >
    <View style={styles.Wrapper}>
      {props.icon && <Image style={styles.Image} source={props.icon} />}
      <Text
        style={[
          textStyle,
          styles.Text,
          {
            color: props.textColor
              ? props.textColor
              : props.onDarkBg
              ? colors.ulisse
              : colors.ughina,
          },
        ]}
      >
        {props.text.toUpperCase()}
      </Text>
    </View>
  </MaybeTouchable>
);

export const Note = React.memo(NoteUnmemoized);
