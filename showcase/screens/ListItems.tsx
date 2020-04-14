import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-urbi-ui/components/ListItem';
import { ListItemCompact } from 'react-native-urbi-ui/components/ListItemCompact';
import { ListItemLarge } from 'react-native-urbi-ui/components/ListItemLarge';
import { ListItemPlaceholder } from 'react-native-urbi-ui/components/ListItemPlaceholder';
import { IconButtonRegular } from 'react-native-urbi-ui/molecules/buttons/iconButtons/IconButtonRegular';
import { ChipAndLabel } from 'react-native-urbi-ui/molecules/content/ChipAndLabel';
import { DoubleLabel } from 'react-native-urbi-ui/molecules/content/DoubleLabel';
import { IconAndDoubleLabel } from 'react-native-urbi-ui/molecules/content/IconAndDoubleLabel';
import { IconAndLabel } from 'react-native-urbi-ui/molecules/content/IconAndLabel';
import { Label } from 'react-native-urbi-ui/molecules/content/Label';
import { EndDoubleLabel } from 'react-native-urbi-ui/molecules/end/EndDoubleLabel';
import { EndDoubleLabelAndIcon } from 'react-native-urbi-ui/molecules/end/EndDoubleLabelAndIcon';
import { EndLabel } from 'react-native-urbi-ui/molecules/end/EndLabel';
import { EndLabelAndIcon } from 'react-native-urbi-ui/molecules/end/EndLabelAndIcon';
import { EndRealTime } from 'react-native-urbi-ui/molecules/end/EndRealTime';
import { colors } from 'react-native-urbi-ui/utils/colors';
import { showAlert, showLongAlert } from 'react-native-urbi-ui/utils/functions';
import { placeholder, renderComponent } from '../utils/ComponentPreview';
import { ChipOverLabel } from 'react-native-urbi-ui/molecules/content/ChipOverLabel';
import { ChipAndDoubleLabel } from 'react-native-urbi-ui/molecules/content/ChipAndDoubleLabel';

const onListItemPress = () => setTimeout(() => showAlert('clicked on list item 200ms ago'), 200);
const onButtonPress = () => showLongAlert('clicked on button');

class ListItems extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'ListItemChip (w/ChipOverLabel)',
          <ListItemLarge
            content={
              <ChipOverLabel
                chip={{ label: 'U3', color: colors.subway, icon: 'subway-small' }}
                label="to WhateverStraße"
              />
            }
            end={<EndLabel label="Something" />}
          />
        )}
        {renderComponent(
          'ListItemChip (w/ChipAndDoubleLabel)',
          <ListItemLarge
            content={
              <ChipAndDoubleLabel
                chip={{ label: 'U3', color: colors.subway, icon: 'subway-small' }}
                topLabel="No idea what goes here"
                bottomLabel="to WhateverStraße"
              />
            }
            end={<EndLabel label="Something" />}
          />
        )}
        {renderComponent(
          'ListItemChip (w/ChipOverLabel, no End)',
          <ListItemLarge
            content={
              <ChipOverLabel
                chip={{ label: 'U3', color: colors.subway, icon: 'subway-small' }}
                label="to WhateverStraße"
              />
            }
          />
        )}
        {renderComponent(
          'ListItem (w/real time)',
          <ListItem
            content={
              <ChipAndLabel
                chip={{ label: 'U3', color: colors.subway, icon: 'subway-small' }}
                label="to Hermannplatz"
              />
            }
            end={<EndRealTime label="2" subtitle="min" />}
          />
        )}
        {renderComponent('ListItemPlaceholder', <ListItemPlaceholder lines={1} />)}
        {renderComponent('ListItemPlaceholder (two lines)', <ListItemPlaceholder lines={2} />)}
        {renderComponent(
          'ListItemPlaceholder large',
          <ListItemPlaceholder lines={1} variant="large" />
        )}
        {renderComponent(
          'ListItemPlaceholder large (two lines)',
          <ListItemPlaceholder lines={2} variant="large" />
        )}
        {renderComponent(
          'ListItemPlaceholder compact',
          <ListItemPlaceholder lines={1} variant="compact" />
        )}
        {renderComponent(
          'ListItemPlaceholder compact (two lines)',
          <ListItemPlaceholder lines={2} variant="compact" />
        )}
        {renderComponent(
          'ListItemPlaceholder (color prop)',
          <ListItemPlaceholder lines={1} placeholderColor={colors.brand} />
        )}
        {renderComponent(
          'ListItem',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={<EndLabel label="label" />}
          />
        )}
        {renderComponent(
          'ListItem (with separator)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={<EndLabel label="label" />}
            withSeparator
          />
        )}
        {renderComponent(
          'ListItem (with long EndLabel)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={<EndLabel label="long, long, long, long, long label" />}
          />
        )}
        {renderComponent(
          'ListItem (with EndDoubleLabel)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={<EndDoubleLabel label="label" subtitle="label" />}
          />
        )}
        {renderComponent(
          'ListItem (with long EndDoubleLabel)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={
              <EndDoubleLabel
                label="hello, I'm a very long label"
                subtitle="very long subtitle label"
              />
            }
          />
        )}
        {renderComponent(
          'ListItem (with EndLabelAndIcon)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={<EndLabelAndIcon label="label" icon={placeholder} />}
          />
        )}
        {renderComponent(
          'ListItem (with long EndLabelAndIcon)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={<EndLabelAndIcon label="hello, I'm a very long label" icon={placeholder} />}
          />
        )}
        {renderComponent(
          'ListItem (with EndDoubleLabelAndIcon)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={<EndDoubleLabelAndIcon label="label" subtitle="subtitle" icon={placeholder} />}
          />
        )}
        {renderComponent(
          'ListItem (with long EndDoubleLabelAndIcon)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            end={
              <EndDoubleLabelAndIcon
                label="hello, I'm a very long label"
                subtitle="and I'm an even longer subtitle"
                icon={placeholder}
              />
            }
          />
        )}
        {renderComponent(
          'ListItem (with action)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" />}
            icon={placeholder}
          />
        )}
        {renderComponent(
          'ListItemCompact',
          <ListItemCompact
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" smallIcon />}
            end={<EndLabel label="label" />}
          />
        )}
        {renderComponent(
          'ListItemCompact (with separator)',
          <ListItemCompact
            content={<IconAndLabel image={placeholder} label="Hello, I'm a title" smallIcon />}
            end={<EndLabel label="label" />}
            withSeparator
          />
        )}
        {renderComponent(
          'ListItemCompact (with icon)',
          <ListItemCompact content={<Label text="Hello, I'm a label" />} icon="car" />
        )}
        {renderComponent(
          'ListItemLarge',
          <ListItemLarge content={<DoubleLabel label="Hello, I'm a title" subtitle="Body" />} />
        )}
        {renderComponent(
          'ListItemLarge (with separator)',
          <ListItemLarge
            content={<DoubleLabel label="Hello, I'm a title" subtitle="Body" />}
            withSeparator
          />
        )}
        {renderComponent(
          'ListItemLarge (w/IconAndLabel)',
          <ListItemLarge content={<IconAndLabel icon="car" label="Hello, I'm a title" />} />
        )}
        {renderComponent(
          'ListItemLarge (w/IconAndDoubleLabel)',
          <ListItemLarge
            content={
              <IconAndDoubleLabel icon={placeholder} label="Hello, I'm a title" subtitle="Body" />
            }
          />
        )}
        {renderComponent(
          'ListItemLarge (w/EndDoubleLabelAndIcon)',
          <ListItemLarge
            content={<DoubleLabel label="Hello, I'm a title" subtitle="Body" />}
            end={
              <EndDoubleLabelAndIcon
                label="hello, I'm a very long label"
                subtitle="and I'm an even longer subtitle"
                icon={placeholder}
              />
            }
          />
        )}
        {renderComponent(
          'ListItemLarge (w/action)',
          <ListItemLarge
            content={
              <IconAndDoubleLabel icon={placeholder} label="Hello, I'm a title" subtitle="Body" />
            }
            icon={placeholder}
          />
        )}
        {renderComponent(
          'ListItemLarge (w/action and separator)',
          <ListItemLarge
            content={
              <IconAndDoubleLabel icon={placeholder} label="Hello, I'm a title" subtitle="Body" />
            }
            icon={placeholder}
            withSeparator
          />
        )}
        {renderComponent(
          'ListItem (with 2 events)',
          <ListItem
            content={<IconAndLabel image={placeholder} label="Click me" />}
            end={<IconButtonRegular icon="car" buttonStyle="default" onPress={onButtonPress} />}
            onPress={onListItemPress}
          />
        )}
      </ScrollView>
    );
  }
}

export default ListItems;
