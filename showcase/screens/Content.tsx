import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonAndLabel } from 'react-native-urbi-ui/components/ButtonAndLabel';
import { ButtonCompact } from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';
import { DoubleLabel } from 'react-native-urbi-ui/molecules/content/DoubleLabel';
import { IconAndDoubleLabel } from 'react-native-urbi-ui/molecules/content/IconAndDoubleLabel';
import { IconAndLabel } from 'react-native-urbi-ui/molecules/content/IconAndLabel';
import IconAndLabelOverIcons from 'react-native-urbi-ui/molecules/content/IconAndLabelOverIcons';
import Label from 'react-native-urbi-ui/molecules/content/Label';
import LabelTitle from 'react-native-urbi-ui/molecules/content/LabelTitle';
import CenteredLabel from 'react-native-urbi-ui/molecules/text/CenteredLabel';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { onButtonPress, placeholder, renderComponent } from '../utils/ComponentPreview';

const longTitle =
  "Hello, I'm an incredibly long title which should be trimmed at some point. " +
  'However, I should be able to span at least 2 lines before that happens.';

const longSubtitle =
  'Subtitle goes here, and is also incredibly long. It should also take up to 2 lines, ' +
  'but never more than that. You should see an ellipsis at the right, right where the ' +
  'text is cut';

class Content extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent('Label', <Label text="Hello, I'm a title" />)}
        {renderComponent(
          'Label (long)',
          <Label text="Hello, I'm an incredibly long title, and I should be trimmed at some point" />
        )}
        {renderComponent('LabelTitle', <LabelTitle text="Hello, I'm a title" />)}
        {renderComponent('LabelTitle (long)', <LabelTitle text={longTitle} />)}
        {renderComponent(
          'DoubleLabel',
          <DoubleLabel label="Hello, I'm a title" subtitle="Subtitle goes here" />
        )}
        {renderComponent(
          'DoubleLabel (long)',
          <DoubleLabel label={longTitle} subtitle={longSubtitle} />
        )}
        {renderComponent(
          'IconAndLabel (with icon)',
          <IconAndLabel icon="sentiment_satisfied" label="Hello, I'm a title" />
        )}
        {renderComponent(
          'IconAndLabel (with small icon)',
          <IconAndLabel icon="sentiment_satisfied" label="Hello, I'm a title" smallIcon />
        )}
        {renderComponent(
          'IconAndLabel',
          <IconAndLabel image={placeholder} label="Hello, I'm a title" />
        )}
        {renderComponent(
          'IconAndLabel (long)',
          <IconAndLabel image={placeholder} label={longTitle} />
        )}
        {renderComponent(
          'IconAndDoubleLabel',
          <IconAndDoubleLabel
            icon={placeholder}
            label="Hello, I'm a title"
            subtitle="Subtitle goes here"
          />
        )}
        {renderComponent(
          'IconAndDoubleLabel (long)',
          <IconAndDoubleLabel
            icon={placeholder}
            label={`Via Giambellino 40, 20189\nMilano, Italy`}
            subtitle={`05/04/17 at 12:15 - 13 min, and if we need\nwe add something more here.`}
          />
        )}
        {renderComponent(
          'IconAndDoubleLabel (long)',
          <IconAndDoubleLabel
            icon={placeholder}
            label={`Via Giambellino 40, 20189\nMilano, Italy, and a lot of other stuff that we want to show`}
            subtitle={`05/04/17 at 12:15 - 13 min, and if we need\nwe add something more here.`}
          />
        )}
        {renderComponent(
          'ButtonAndLabel',
          <ButtonAndLabel
            button={<ButtonCompact buttonStyle="primary" label="action" onPress={onButtonPress} />}
            label={<CenteredLabel text="BodyBold" color={colors.success} />}
          />
        )}
        {renderComponent(
          'IconAndLabelOverIcons',
          <IconAndLabelOverIcons
            icon={placeholder}
            label="Hi, I'm a label"
            icons={['lights-small', 'offer-small']}
          />
        )}
      </ScrollView>
    );
  }
}

export default Content;
