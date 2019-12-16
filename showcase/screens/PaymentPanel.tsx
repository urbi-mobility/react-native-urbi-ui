import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { PaymentPanel as PaymentPanelComponent } from 'react-native-urbi-ui/components/PaymentPanel';
import { ButtonRegular } from 'react-native-urbi-ui/molecules/buttons/ButtonRegular';
import { onIphoneX } from '../utils/const';
import { onButtonPress, placeholder, renderComponent, sleep } from '../utils/ComponentPreview';

type PaymentPanelState = {
  showPanel: boolean;
  progress: boolean;
};

class PaymentPanel extends React.PureComponent<any, PaymentPanelState> {
  constructor(props: any) {
    super(props);
    this.state = { showPanel: false, progress: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState({ showPanel: false });
  }

  showModal() {
    this.setState({ showPanel: true });
  }

  async simulateCall() {
    this.setState({ progress: true });
    await sleep(1000);
    this.setState({ progress: false });
  }

  render() {
    return (
      <>
        <PaymentPanelComponent
          show={this.state.showPanel}
          loading={this.state.progress}
          cancel="cancel"
          onCancelPress={this.hideModal}
          paymentTitle="Payment method"
          title="YOUR ORDER"
          nameShop="Item name goes here"
          buttonTitle="CONFIRM AND PAY"
          buttonOnPress={() => {
            this.simulateCall();
          }}
          price="20.90€"
          cardProperty={{
            haveCard: true,
            imageCard: placeholder,
            labelCard: 'Insert Card',
            onCardPress: onButtonPress,
          }}
          onIphoneX={onIphoneX}
        />
        <ScrollView>
          {renderComponent(
            'PaymentPanel',
            <ButtonRegular
              buttonStyle="primary"
              label="show PaymentPanel"
              onPress={this.showModal}
            />
          )}
        </ScrollView>
      </>
    );
  }
}

export default PaymentPanel;
