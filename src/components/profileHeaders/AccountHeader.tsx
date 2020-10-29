import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../../utils/colors';
import { onIOS } from '../../utils/const';
import { Touchable } from '../Touchable';
import { ImageAndStatus, ImageAndStatusProps } from './ImageAndStatus';
import { Tooltip } from 'src/components/Tooltip';

export const headerShadowStyle = {
  backgroundColor: colors.ulisse,
  marginBottom: onIOS ? 8 : 0,
  shadowRadius: 4,
  shadowOffset: { height: 2, width: 0 },
  shadowColor: colors.shadowBorder,
  shadowOpacity: 1,
};

export const headerHeight = 112; // TODO fix this with flex, it's padding + Status.height + margin

const styles = StyleSheet.create({
  Wrapper: headerShadowStyle,
  ContentWrapper: {
    height: headerHeight,
    backgroundColor: colors.ulisse,
    paddingVertical: 32,
    paddingRight: 12,
    paddingLeft: 16,
  } as ViewStyle,
  Tooltip: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

interface AccountHeaderProps extends ImageAndStatusProps {
  onPress: () => any;
  flexExpand?: boolean;
  onTooltipHide?: () => any;
  withTooltipText?: string;
}

type AccountHeaderState = {
  showTooltip: boolean;
};

export class AccountHeader extends React.PureComponent<AccountHeaderProps, AccountHeaderState> {
  constructor(props: AccountHeaderProps) {
    super(props);
    this.state = { showTooltip: true };
    this.onHide = this.onHide.bind(this);
  }

  onHide() {
    this.setState({ showTooltip: false }, this.props.onTooltipHide);
  }

  render() {
    return (
      <View
        style={this.props.flexExpand ? [styles.Wrapper, { flex: 1 }] : styles.Wrapper}
        elevation={5}
      >
        <Touchable
          accessible={true}
          accessibilityLabel="account header touchable"
          onPress={this.props.onPress}
        >
          <View style={styles.ContentWrapper}>
            <ImageAndStatus {...this.props} />
          </View>
        </Touchable>
        {this.props.withTooltipText ? (
          <Tooltip
            text={this.props.withTooltipText}
            show={this.state.showTooltip}
            onHide={this.onHide}
            anchorY={0}
            anchorYIsFromBottom
          />
        ) : null}
      </View>
    );
  }
}
