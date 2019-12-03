import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-urbi-ui/components/Card';
import { IconButtonCompact } from 'react-native-urbi-ui/molecules/buttons/iconButtons/IconButtonCompact';
import { CardHeader } from 'react-native-urbi-ui/molecules/card/CardHeader';
import { VehicleImg } from 'react-native-urbi-ui/molecules/img/VehicleImg';
import { colors } from 'react-native-urbi-ui/utils/colors';
import {
  carPlaceholder,
  onButtonPress,
  placeholder,
  renderComponent,
} from '../utils/ComponentPreview';
import { Chip } from 'react-native-urbi-ui/molecules/Chip';

type CardsState = {
  toggles: { [toggleKey: string]: boolean };
};

class Cards extends React.PureComponent<any, CardsState> {
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
          'Card',
          <Card
            header={
              <CardHeader
                topLabel="VOUCHER PROMO"
                title="Zig Zag"
                bigLabel="GRATIS"
                struckout="8,66€"
                highlightBigLabel
              />
            }
          />
        )}
        {renderComponent(
          'Card (Clickable)',
          <Card
            header={
              <CardHeader
                topLabel="VOUCHER PROMO AND MUCH MUCH MORE! FOLLOW US ON TWITTER"
                title="Zig Zag"
                bigLabel="GRATIS"
                struckout="8,66€"
                highlightBigLabel
              />
            }
            onPress={onButtonPress}
          />
        )}
        {renderComponent(
          'Card (with image)',
          <Card
            header={
              <CardHeader
                topLabel="REGISTRATION AND A LOT OF OTHER BENEFITS"
                title="Miles"
                bigLabel="GRATIS"
                struckout="8,66€"
                highlightBigLabel
              />
            }
            onPress={onButtonPress}
            image={<VehicleImg image={carPlaceholder} providerLogo={placeholder} />}
          />
        )}
        {renderComponent(
          'Card (with logo)',
          <Card
            header={
              <CardHeader
                topLabel="REGISTRATION AND A LOT OF OTHER BENEFITS OMG I CAN'T EVEN"
                title="Miles"
                bigLabel="GRATIS"
                struckout="8,66€"
                highlightBigLabel
              />
            }
            onPress={onButtonPress}
            logo={placeholder}
          />
        )}
        {renderComponent(
          'Card (with description)',
          <Card
            header={
              <CardHeader
                topLabel="REGISTRATION AND A LOT OF OTHER BENEFITS"
                title="Miles"
                bigLabel="GRATIS"
                struckout="8,66€"
                icon={
                  <IconButtonCompact
                    buttonStyle="secondary"
                    icon="fav-small"
                    colorOverride={this.state.toggles.cardWithDesc ? colors.brand : undefined}
                    onPress={this.toggle('cardWithDesc')}
                  />
                }
                highlightBigLabel
              />
            }
            onPress={onButtonPress}
            image={<VehicleImg image={carPlaceholder} providerLogo={placeholder} />}
            description="Come with me, and you'll be, in a world of pure imagination"
          />
        )}
        {renderComponent(
          'Card (with status and logo)',
          <Card
            header={
              <CardHeader
                topLabel={<Chip label="active now" bgState="success" />}
                title="Daily ticket"
                bigLabel="80 min left"
              />
            }
            logo={placeholder}
            onPress={onButtonPress}
          />
        )}
        {renderComponent(
          'Card (with status and logo)',
          <Card
            header={
              <CardHeader
                topLabel={<Chip label="expired" bgState="error" />}
                title="Milan airport shuttle"
                bigLabel="12/12/2019 @3:30PM"
              />
            }
            logo={placeholder}
            onPress={onButtonPress}
            description="Milan Centrale > Malpensa T1 &amp; T2"
          />
        )}
      </ScrollView>
    );
  }
}

export default Cards;
