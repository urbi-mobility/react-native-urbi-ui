import React, { ReactElement } from 'react';
import { Clipboard, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { MaybeTouchable } from 'src/components/MaybeTouchable';
import { ButtonCompactUnmemoized } from 'src/molecules/buttons/ButtonCompact';
import { LinkCompact } from 'src/molecules/buttons/LinkCompact';
import { Testable } from 'src/types';
import { colors } from 'src/utils/colors';
import { registeredTextStyle } from 'src/utils/textStyles';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
  CardInner: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: colors.ulisse,
    padding: 20,
    paddingBottom: 0,
    overflow: 'hidden',
  },
  CodeWrapper: {
    flex: 1,
    backgroundColor: colors.ukko,
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 20,
  },
  Code: {
    ...registeredTextStyle('title1'),
    textAlign: 'center',
  },
  Text: {
    ...registeredTextStyle('body'),
    textAlign: 'center',
    marginBottom: 20,
  },
  ButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

interface CardCodeProps extends Testable {
  code: string;
  text: string;
  copyCodeLabel: string;
  button?: ReactElement<typeof ButtonCompactUnmemoized>;
  onCopyPressed?: () => any;
}

const onCopyPress = (props: CardCodeProps) => {
  return () => {
    Clipboard.setString(props.code);
    if (props.onCopyPressed) props.onCopyPressed();
  };
};

export const CardCodeUnmemoized = (props: CardCodeProps) => (
  <View style={styles.Wrapper}>
    <MaybeTouchable borderRadius={10} margin={24} marginTop={12} marginBottom={12} withShadow>
      <View style={styles.CardInner}>
        <View style={styles.CodeWrapper}>
          <Text style={styles.Code}>{props.code}</Text>
          <LinkCompact
            text={props.copyCodeLabel}
            onPress={onCopyPress(props)}
            testID={props.text}
            center
          />
        </View>
        <Text style={styles.Text}>{props.text}</Text>
        {props.button && <View style={styles.ButtonWrapper}>{props.button}</View>}
      </View>
    </MaybeTouchable>
  </View>
);

export const CardCode = React.memo(CardCodeUnmemoized);
