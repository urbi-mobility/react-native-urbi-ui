import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { AccountHeader } from 'react-native-urbi-ui/components/profileHeaders/AccountHeader';
import { ProfileAndTrips } from 'react-native-urbi-ui/components/profileHeaders/ProfileAndTrips';
import { ProfilePic } from 'react-native-urbi-ui/components/profileHeaders/ProfilePic';
import { Status } from 'react-native-urbi-ui/molecules/content/Status';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { onPressShowNotYet } from 'react-native-urbi-ui/utils/functions';
import {
  fiftyByFiftyWhitePlaceholder,
  placeholder,
  renderComponent,
  userAvaterPlaceholder,
  carPlaceholder,
} from '../utils/ComponentPreview';

class ProfileHeaders extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'AccountHeader (before verification)',
          <AccountHeader
            image={placeholder}
            status={
              <Status
                title="Hey there!"
                content="Create your profile"
                titleColor={colors.uma}
                contentColor={colors.brand}
              />
            }
            onPress={onPressShowNotYet}
            flexExpand
          />
        )}
        {renderComponent(
          'AccountHeader (before verification)',
          <AccountHeader
            image={userAvaterPlaceholder}
            status={
              <Status
                title="Hey Name!"
                content="Have a good day!"
                titleColor={colors.uma}
                contentColor={colors.brand}
              />
            }
            onPress={onPressShowNotYet}
            flexExpand
          />
        )}
        {renderComponent(
          'AccountHeader (with wallet)',
          <AccountHeader
            image={userAvaterPlaceholder}
            status={
              <Status
                title="Hey Name!"
                content="€20 credit in your wallet"
                titleColor={colors.uma}
                contentColor={colors.brand}
              />
            }
            onPress={onPressShowNotYet}
            flexExpand
          />
        )}
        {renderComponent(
          'AccountHeader (with wallet and crop)',
          <AccountHeader
            image={require('../assets/fernsehturm.jpg')}
            status={
              <Status
                title="Hey Name!"
                content="€20 credit in your wallet"
                titleColor={colors.uma}
                contentColor={colors.brand}
              />
            }
            onPress={onPressShowNotYet}
            flexExpand
          />
        )}
        {renderComponent(
          'ProfilePic',
          <ProfilePic
            image={userAvaterPlaceholder}
            onPress={onPressShowNotYet}
            withCameraIcon
            flexExpand
          />
        )}
        {renderComponent(
          'ProfilePic (cropped tall image)',
          <ProfilePic
            image={require('../assets/fernsehturm.jpg')}
            onPress={onPressShowNotYet}
            withCameraIcon
            flexExpand
          />
        )}
        {renderComponent(
          'ProfilePic (cropped wide image)',
          <ProfilePic
            image={require('../assets/dome.jpg')}
            onPress={onPressShowNotYet}
            withCameraIcon
            flexExpand
          />
        )}
        {renderComponent(
          'ProfilePic without button or onPress',
          <ProfilePic image={userAvaterPlaceholder} flexExpand />
        )}
      </ScrollView>
    );
  }
}

export default ProfileHeaders;
