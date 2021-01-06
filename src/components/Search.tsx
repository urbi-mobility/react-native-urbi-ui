import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { IconButtonCompact } from 'src/molecules/buttons/iconButtons/IconButtonCompact';
import { IconAndLabel } from 'src/molecules/content/IconAndLabel';
import { Testable } from 'src/types';
import { colors } from 'src/utils/colors';

type SearchAction = {
  icon: string;
  stateful: boolean;
  onPress?: (toggledOn: boolean, label?: string) => any;
};

interface SearchProps extends Testable {
  onPress: () => any;
  backgroundColor: 'ukko' | 'ulisse' | 'uma';
  leftIcon: string;
  rightmostAction?: SearchAction;
  leftmostAction?: SearchAction;
  rightmostTestID?: string;
  leftmostTestID?: string;
  label?: string;
}

type SearchState = {
  rightActionToggled: boolean;
  leftActionToggled: boolean;
};

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    height: 60,
  },
  SearchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    paddingLeft: 8,
    paddingRight: 8,
  },
  Label: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export class Search extends React.PureComponent<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = { rightActionToggled: false, leftActionToggled: false };
    this.onActionPress = this.onActionPress.bind(this);
  }

  onActionPress(position: 'left' | 'right') {
    return () => {
      const currentState = this.state[`${position}ActionToggled`] as boolean;
      const propsField = `${position}mostAction`;
      const action = this.props[propsField] as SearchAction;

      if (action?.stateful) {
        if (position === 'left') {
          this.setState({ leftActionToggled: !currentState });
        } else {
          this.setState({ rightActionToggled: !currentState });
        }
      }

      if (action?.onPress) {
        action.onPress(!currentState, this.props.label);
      }
    };
  }

  render() {
    const {
      backgroundColor,
      label,
      leftIcon,
      leftmostAction,
      leftmostTestID,
      onPress,
      rightmostAction,
      rightmostTestID,
      testID,
    } = this.props;

    const bg = colors[backgroundColor];

    return (
      <View style={styles.Wrapper}>
        <View style={[styles.SearchBox, { backgroundColor: bg }]}>
          <TouchableWithoutFeedback testID={testID ?? 'searchTestID'} onPress={onPress}>
            <View style={{ flex: 1 }}>
              <View style={styles.Label}>
                <IconAndLabel
                  icon={leftIcon}
                  iconColor={backgroundColor === 'uma' ? colors.ulisse : colors.primary}
                  label={label ?? ''}
                  labelColor={backgroundColor === 'uma' ? colors.ulisse : colors.uma}
                  smallIcon
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          {leftmostAction && (
            <IconButtonCompact
              buttonStyle="secondary"
              icon={leftmostAction.icon}
              onPress={this.onActionPress('left')}
              testID={leftmostTestID}
              colorOverride={
                this.state.leftActionToggled
                  ? colors.brand
                  : backgroundColor === 'uma'
                  ? colors.ulisse
                  : colors.primary
              }
            />
          )}
          {rightmostAction && (
            <IconButtonCompact
              buttonStyle="secondary"
              icon={rightmostAction.icon}
              onPress={this.onActionPress('right')}
              testID={rightmostTestID}
              colorOverride={
                this.state.rightActionToggled
                  ? colors.brand
                  : backgroundColor === 'uma'
                  ? colors.ulisse
                  : colors.primary
              }
            />
          )}
        </View>
      </View>
    );
  }
}
