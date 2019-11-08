import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Purchase } from 'react-native-urbi-ui/molecules/content/Purchase';
import { PurchasePanel as PurchasePanelComp } from 'react-native-urbi-ui/components/PurchasePanel';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

class PurchasePanel extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'PurchasePanel',
          <PurchasePanelComp
            onButtonPress={onButtonPress}
            label="Action"
            purchase={
              <Purchase
                detail="detail"
                price="€500,00"
                oldPrice="oldprice"
                onPress={onButtonPress}
                icon="up-small"
              />
            }
          />
        )}
      </ScrollView>
    );
  }
}

export default PurchasePanel;
