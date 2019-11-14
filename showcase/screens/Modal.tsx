import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { DoubleChoice } from 'react-native-urbi-ui/components/DoubleChoice';
import { Modal as ModalComponent } from 'react-native-urbi-ui/components/Modal';
import { ButtonCompact } from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';
import { renderComponent, userAvaterPlaceholder } from '../utils/ComponentPreview';
import { showAlert } from 'react-native-urbi-ui/utils/functions';

type ModalState = {
  showModal: boolean;
};

class Modal extends React.PureComponent<any, ModalState> {
  constructor(props: any) {
    super(props);
    this.state = { showModal: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  showModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <>
        <ModalComponent
          show={this.state.showModal}
          image={userAvaterPlaceholder}
          title="Modal title"
          text="Hey, I'm the main content for this modal. Text can span multiple lines, but it shouldn't be too long"
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
        <ScrollView>
          {renderComponent(
            'Modal',
            <ButtonRegular buttonStyle="primary" label="show modal" onPress={this.showModal} />
          )}
        </ScrollView>
      </>
    );
  }
}

export default Modal;
