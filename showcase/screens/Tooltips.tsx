import React from 'react';
import { ScrollView, StyleSheet, ViewStyle, View } from 'react-native';
import { WithTooltip } from 'react-native-urbi-ui/components/Tooltip';
import { ButtonCompact } from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';
import { onButtonPress } from '../utils/ComponentPreview';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { TooltipContainer } from 'react-native-urbi-ui/components/TooltipContainer';

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  } as ViewStyle,
  ScrollView: {
    backgroundColor: colors.ukko,
  },
  Spacer: {
    flex: 1,
    minHeight: 200,
  },
  ButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

type TooltipsState = {
  showTooltip: boolean;
};

class Tooltips extends React.PureComponent<any, TooltipsState> {
  private tooltipContainer: React.RefObject<TooltipContainer>;

  constructor(props: any) {
    super(props);
    this.state = { showTooltip: true };
    this.tooltipContainer = React.createRef();
    this.toggleTooltip = this.toggleTooltip.bind(this);
  }

  toggleTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip });
  }

  render() {
    return (
      <View style={styles.Wrapper}>
        <ScrollView style={styles.Wrapper} contentContainerStyle={styles.ScrollView}>
          <View style={styles.Spacer}></View>
          <View style={styles.ButtonWrapper}>
            <ButtonCompact
              buttonStyle="default"
              onPress={onButtonPress}
              label="check if I'm working"
            />
          </View>
          <WithTooltip
            tooltipContainer={this.tooltipContainer}
            text="Hey I'm a tooltip that's displayed automatically as you open this screen, let's see how I'm rendered 🧐. Tap anywhere to hide me!"
            show={this.state.showTooltip}
            onHide={this.toggleTooltip}
          >
            <View style={styles.ButtonWrapper}>
              <ButtonCompact
                buttonStyle="brand"
                onPress={this.toggleTooltip}
                label="show tooltip"
              />
            </View>
          </WithTooltip>
        </ScrollView>
        <TooltipContainer ref={this.tooltipContainer} />
      </View>
    );
  }
}

export default Tooltips;
