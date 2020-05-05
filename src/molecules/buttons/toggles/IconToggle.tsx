import React from 'react';
import { View, StyleSheet } from 'react-native';
import { styles } from '../../../molecules/buttons/ButtonStyles';
import { IconButton } from '../../../molecules/buttons/iconButtons/IconButton';
import { sizes } from '../../../molecules/buttons/iconButtons/IconButtonRegular';
import { ToggleProps } from '../../../molecules/buttons/types';
import { colors } from '../../../utils/colors';
import { LoadingCircle } from 'src/molecules/animations/LoadingCircle';

type ToggleState = {
  active: boolean;
  loading: boolean;
  pendingUpdates: number;
};

const registeredStyles = StyleSheet.create({
  Wrapper: {
    height: sizes.size,
    width: sizes.size,
    borderRadius: sizes.size / 2,
    overflow: 'hidden',
    justifyContent: 'center',
  },
});

export class IconToggle extends React.PureComponent<ToggleProps, ToggleState> {
  static getDerivedStateFromProps(props: ToggleProps, state: ToggleState) {
    if (props.managed) {
      const updateActive = state.pendingUpdates === 0 && props.active !== state.active;
      const updateLoading = state.loading !== props.loading;
      const update = {} as Partial<ToggleState>;
      if (updateActive) update.active = props.active;
      if (updateLoading) update.loading = props.loading;
      return update;
    }
    return null;
  }

  constructor(props: ToggleProps) {
    super(props);
    const { active, loading } = props;
    this.state = { active, loading: loading ?? false, pendingUpdates: 0 };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const { active, pendingUpdates } = this.state;
    const { id, setActive } = this.props;
    const newState = !active;
    this.setState({ active: newState, pendingUpdates: pendingUpdates + 1 }, () => {
      setActive(id, newState);
      this.setState({ pendingUpdates: this.state.pendingUpdates - 1 });
    });
  }

  render() {
    const { active } = this.state;
    const buttonStyle = active ? 'primary' : 'switched-off';
    const computedStyle = styles({ ...this.props, buttonStyle });
    if (active) {
      computedStyle.backgroundColor = colors.ulisse;
      computedStyle.color = colors.uma;
    }
    return this.props.loading === undefined ? (
      <IconButton
        buttonStyle={buttonStyle}
        onPress={this.toggleState}
        icon={this.props.icon}
        style={this.props.style}
        {...sizes}
        {...computedStyle}
      />
    ) : (
      <View style={[registeredStyles.Wrapper, { backgroundColor: computedStyle.backgroundColor }]}>
        {this.props.loading ? (
          <LoadingCircle size={sizes.innerIconSize - 4} color={computedStyle.color} />
        ) : (
          <IconButton
            buttonStyle={buttonStyle}
            onPress={this.toggleState}
            icon={this.props.icon}
            style={this.props.style}
            {...sizes}
            {...computedStyle}
          />
        )}
      </View>
    );
  }
}
