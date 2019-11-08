import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { AccountHeader } from 'react-native-urbi-ui/components/profileHeaders/AccountHeader';
import { ProfileAndTrips } from 'react-native-urbi-ui/components/profileHeaders/ProfileAndTrips';
import { ProfilePic } from 'react-native-urbi-ui/components/profileHeaders/ProfilePic';
import { IconButtonCompact } from 'react-native-urbi-ui/molecules/buttons/iconButtons/IconButtonCompact';
import { Status } from 'react-native-urbi-ui/molecules/content/Status';
import { onPressShowNotYet } from 'react-native-urbi-ui/utils/functions';
import {
  eightyByEightyWhitePlaceholder,
  fiftyByFiftyWhitePlaceholder,
  renderComponent,
  userAvaterPlaceholder,
} from '../utils/ComponentPreview';

class ProfileHeaders extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'AccountHeader (before verification)',
          <AccountHeader
            image={fiftyByFiftyWhitePlaceholder}
            status={<Status title="Hey there!" content="Create your profile" />}
            onPress={onPressShowNotYet}
          />
        )}
        {renderComponent(
          'AccountHeader (before verification)',
          <AccountHeader
            image={userAvaterPlaceholder}
            status={<Status title="Hey Name!" content="Have a good day!" />}
            onPress={onPressShowNotYet}
          />
        )}
        {renderComponent(
          'AccountHeader (with wallet)',
          <AccountHeader
            image={userAvaterPlaceholder}
            status={<Status title="Hey Name!" content="€20 credit in your wallet" />}
            onPress={onPressShowNotYet}
          />
        )}
        {renderComponent(
          'ProfilePic',
          <ProfilePic
            image={eightyByEightyWhitePlaceholder}
            button={
              <IconButtonCompact
                buttonStyle="default"
                icon="fav-small"
                onPress={onPressShowNotYet}
              />
            }
            onPress={onPressShowNotYet}
          />
        )}
        {renderComponent(
          'ProfileAndTrips',
          <ProfileAndTrips
            image={fiftyByFiftyWhitePlaceholder}
            status={<Status title="Hey there!" content="Create your profile" />}
            sectionTitle="This month"
            left={{ title: 'trips', value: '2' }}
            center={{ title: 'minutes', value: '12' }}
            right={{ title: 'costs', value: '€15' }}
            onPress={onPressShowNotYet}
          />
        )}
      </ScrollView>
    );
  }
}

export default ProfileHeaders;
