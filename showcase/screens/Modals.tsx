import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { DoubleChoice } from 'react-native-urbi-ui/components/DoubleChoice';
import { Modal } from 'react-native-urbi-ui/components/Modal';
import { ButtonCompact } from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';
import { renderComponent, userAvaterPlaceholder, onButtonPress } from '../utils/ComponentPreview';
import { Snackbar } from 'react-native-urbi-ui/components/Snackbar';
import { SnackbarViewProps, SnackbarView } from 'react-native-urbi-ui/components/SnackbarView';
import { colors } from 'react-native-urbi-ui/utils/colors';

type ModalState = {
  showModal: boolean;
  snackbarProps?: SnackbarViewProps;
};

const snackbarTests = {
  singleLine: (snackbar: Snackbar) => snackbar.show('Single-line message.'),
  singleWithAction: (snackbar: Snackbar) =>
    snackbar.showWithAction('Single-line message with action.', {
      text: 'ACTION',
      onPress: onButtonPress,
    }),
  singleLongLineWithAction: (snackbar: Snackbar) =>
    snackbar.showWithAction('Single-line message with a very long message and action,', {
      text: 'ACTION',
      onPress: onButtonPress,
    }),
  singleLineWithColors: (snackbar: Snackbar) =>
    snackbar.showCustom({
      firstLine: 'Single-line with fanciness.',
      backgroundColor: colors.uto,
      textColor: colors.ukko,
      action: {
        text: 'ACTION',
        onPress: onButtonPress,
        textColor: colors.ulisse,
      },
    }),
  sixSecondDelay: (snackbar: Snackbar) =>
    snackbar.showCustom({
      firstLine: 'Single-line message with action.',
      hideDelayMillis: 6000,
      action: {
        text: 'ACTION',
        onPress: onButtonPress,
      },
    }),
  twoLines: (snackbar: Snackbar) =>
    snackbar.showCustom({
      firstLine: 'Two-line message',
      secondLine: 'without action.',
    }),
  twoLinesWithAction: (snackbar: Snackbar) =>
    snackbar.showCustom({
      firstLine: 'Two-line message',
      secondLine: 'with action.',
      action: {
        text: 'ACTION',
        onPress: onButtonPress,
      },
    }),
  twoLongLinesWithAction: (snackbar: Snackbar) =>
    snackbar.showCustom({
      firstLine:
        'Two-line message with a lot of stuff in it, that should get cropped at some point',
      secondLine: 'with action, and also a second line that is very long indeed',
      action: {
        text: 'ACTION',
        onPress: onButtonPress,
      },
    }),
  threeLines: (snackbar: Snackbar) =>
    snackbar.showCustom({
      firstLine: 'Two-line message',
      secondLine: 'with action.',
      action: {
        text: 'LONGER ACTION TEXT',
        onPress: onButtonPress,
        onNewLine: true,
      },
    }),
  threeLongLines: (snackbar: Snackbar) =>
    snackbar.showCustom({
      firstLine: 'Two-line very long message that should get cropped at some point',
      secondLine: 'with action, and a second line that is also very long and should be cropped.',
      action: {
        text: 'LONGER ACTION TEXT',
        onPress: onButtonPress,
        onNewLine: true,
      },
    }),
};

class Modals extends React.PureComponent<any, ModalState> {
  private snackbar: Snackbar;

  constructor(props: any) {
    super(props);
    this.state = { showModal: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showSnackbar = this.showSnackbar.bind(this);
    this.hideSnackbar = this.hideSnackbar.bind(this);
    this.onSnackbarShow = this.onSnackbarShow.bind(this);
    this.snackbar = new Snackbar(this.onSnackbarShow, this.hideSnackbar);
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideSnackbar() {
    this.setState({ snackbarProps: undefined });
  }

  showSnackbar(test: keyof typeof snackbarTests) {
    return () => snackbarTests[test](this.snackbar);
  }

  onSnackbarShow(snackbarProps: SnackbarViewProps) {
    // in rnn, this is Navigation.showOverlay()
    this.setState({ snackbarProps });
  }

  render() {
    return (
      <>
        <Modal
          show={this.state.showModal}
          image={userAvaterPlaceholder}
          title="Modal title"
          text="Hey, I'm the main content for this modal. Text can span multiple lines, but it shouldn't be too long. Press a button to dismiss."
          actions={
            <DoubleChoice
              left={
                <ButtonCompact buttonStyle="default" onPress={this.hideModal} label="secondary" />
              }
              right={
                <ButtonCompact buttonStyle="primary" onPress={this.hideModal} label="primary" />
              }
            />
          }
        />
        {this.state.snackbarProps ? <SnackbarView {...this.state.snackbarProps} /> : null}
        <ScrollView>
          {renderComponent(
            'Modal',
            <ButtonRegular buttonStyle="primary" label="show modal" onPress={this.showModal} />
          )}
          {Object.keys(snackbarTests).map((k) =>
            renderComponent(
              `Snackbar (${k})`,
              <ButtonRegular
                buttonStyle="primary"
                label="show snackbar"
                onPress={this.showSnackbar(k as keyof typeof snackbarTests)}
              />,
              k
            )
          )}
        </ScrollView>
      </>
    );
  }
}

export default Modals;
