import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import IconButtonCompact from 'react-native-urbi-ui/molecules/buttons/iconButtons/IconButtonCompact';
import CardHeader from 'react-native-urbi-ui/molecules/card/CardHeader';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { renderComponent } from '../utils/ComponentPreview';

type CardHeadersState = {
  toggles: { [toggleKey: string]: boolean };
};

class CardHeaders extends React.PureComponent<any, CardHeadersState> {
  private toggles: { [toggleKey: string]: () => any } = {};

  constructor(props: any) {
    super(props);
    this.state = { toggles: {} };
    this.toggle = this.toggle.bind(this);
  }
  toggle(key: string) {
    if (this.toggles[key]) {
      return this.toggles[key];
    } else {
      const toggleFunc = () =>
        this.setState({ toggles: { ...this.state.toggles, [key]: !this.state.toggles[key] } });
      this.toggles[key] = toggleFunc;
      return toggleFunc;
    }
  }

  render() {
    return (
      <ScrollView>
        {renderComponent(
          'CardHeader',
          <CardHeader topLabel="SCOOTER SHARING" title="Coup" bigLabel="4,99€" />
        )}
        {renderComponent(
          'CardHeader',
          <CardHeader
            topLabel="VOUCHER PROMO"
            title="Zig Zag"
            bigLabel="GRATIS"
            struckout="8,66€"
            highlightBigLabel
          />
        )}
        {renderComponent(
          'CardHeader',
          <CardHeader
            topLabel="CAR SHARING"
            title="Miles"
            bigLabel="9,99€"
            struckout="14,99€"
            icon={
              <IconButtonCompact
                buttonStyle="secondary"
                icon="fav-small"
                colorOverride={this.state.toggles.cardHeader ? colors.brand : undefined}
                onPress={this.toggle('cardHeader')}
              />
            }
          />
        )}
      </ScrollView>
    );
  }
}

export default CardHeaders;
