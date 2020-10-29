import { SnackbarViewProps, SnackbarAction, SnackbarMessage } from 'src/components/SnackbarView';

export class Snackbar {
  private showFunction: (snackbarViewProps: SnackbarViewProps) => any;
  private hideFunction: () => any;
  private messages: SnackbarMessage[] = [];

  constructor(
    /**
     * The function that makes the Snackbar appear.
     * This can either be a call like Navigation.showOverlay() (when
     * using react-native-navigation), or something like setState({ show: true })
     * if the SnackbarView component is rendered inside a parent container
     * (as is the case with the showcase app)
     */
    showFunction: (snackbarViewProps: SnackbarViewProps) => any,
    /**
     * The function that makes the Snackbar disappear.
     * This can either be a call like Navigation.dismissOverlay()
     * (when using react-native-navigation), or something like
     * setState({ show: false }) if the SnackbarView component is rendered
     * inside a parent container (as is the case with the showcase app)
     */
    hideFunction: () => any
  ) {
    this.showFunction = showFunction;
    this.hideFunction = hideFunction;
    this.onHide = this.onHide.bind(this);
    this.show = this.show.bind(this);
    this.showWithAction = this.showWithAction.bind(this);
    this.showCustom = this.showCustom.bind(this);
  }

  private onHide() {
    if (this.messages.length === 1) this.messages = [];
    else this.messages = this.messages.slice(1);
    this.hideFunction();
    if (this.messages.length) {
      this.showFunction({ message: this.messages[0], onHide: this.onHide });
    }
  }

  show(text: string) {
    this.showCustom({ message: text });
  }

  showWithAction(text: string, action: SnackbarAction) {
    this.showCustom({ message: text, action });
  }

  showCustom(message: SnackbarMessage) {
    // enqueue the message
    this.messages.push(message);
    // and show it right away, if it's the only one
    if (this.messages.length === 1) {
      this.showFunction({ message, onHide: this.onHide });
    } // else it will be displayed by onHide() for the previous message
  }
}
