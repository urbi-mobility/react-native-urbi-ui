import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Purchase } from 'react-native-urbi-ui/molecules/content/Purchase';
import { PurchasePanel } from 'react-native-urbi-ui/components/PurchasePanel';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

class PurchasePanelScreen extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'PurchasePanelScreen',
          <PurchasePanel
            onButtonPress={onButtonPress}
            label={'Action'}
            purchase={
              <Purchase
                detail={'detail'}
                price={'€500,00'}
                oldprice={'oldprice'}
                onPressIcon={onButtonPress}
                icon={'fav-small'}
              />
            }
          />
        )}
      </ScrollView>
    );
  }
}

export default PurchasePanelScreen;
