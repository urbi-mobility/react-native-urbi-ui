import React from 'react';
import { ColumnLayout } from 'react-native-urbi-ui/components/ColumnLayout';
import { IconButtonCompact } from 'react-native-urbi-ui/molecules/buttons/iconButtons/IconButtonCompact';
import { IconAndLabelCell } from 'react-native-urbi-ui/molecules/column/IconAndLabelCell';
import { IconsCell } from 'react-native-urbi-ui/molecules/column/IconsCell';
import { LabelCell } from 'react-native-urbi-ui/molecules/column/LabelCell';
import { ScrollView } from 'react-native-gesture-handler';
import { onButtonPress, renderComponent } from '../utils/ComponentPreview';

class ColumnLayouts extends React.PureComponent<any> {
  render() {
    return (
      <ScrollView>
        {renderComponent(
          'ColumnLayout',
          <ColumnLayout columns={[<LabelCell key="k" header="micro" label="Title" />]} />
        )}
        {renderComponent(
          'ColumnLayout (2 cols)',
          <ColumnLayout
            columns={[
              <LabelCell key="k" header="micro" label="Title" />,
              <LabelCell key="k" header="micro" label="Title" />,
            ]}
          />
        )}
        {renderComponent(
          'ColumnLayout (3 cols)',
          <ColumnLayout
            columns={[
              <LabelCell key="k" header="micro" label="Title" />,
              <LabelCell key="k" header="micro" label="Title" />,
              <LabelCell key="k" header="micro" label="Title" />,
            ]}
          />
        )}
        {renderComponent(
          'ColumnLayout (3 cols, 1 missing)',
          <ColumnLayout
            columns={[
              <LabelCell key="k" header="micro" label="Title" />,
              <LabelCell key="k" header="micro" label="Title" />,
            ]}
            divideIn={3}
          />
        )}
        {renderComponent(
          'ColumnLayout (3 cols, with IconsCell)',
          <ColumnLayout
            columns={[
              <LabelCell key="a" header="micro" label="Title" />,
              <LabelCell key="b" header="micro" label="Title" />,
              <IconsCell
                key="c"
                icons={[
                  'gasoline-small',
                  'gasoline-small',
                  <IconButtonCompact
                    buttonStyle="default"
                    key="d"
                    icon="gasoline-small"
                    onPress={onButtonPress}
                  />,
                ]}
              />,
            ]}
          />
        )}
        {renderComponent(
          'ColumnLayout (3 cols, 1 missing, w/IconAndLabelCell)',
          <ColumnLayout
            columns={[
              <LabelCell key="a" header="driving fare" label="€0.36/min" />,
              <IconAndLabelCell key="b" header="driving range" label="95%" icon="gasoline-small" />,
            ]}
            divideIn={3}
          />
        )}
      </ScrollView>
    );
  }
}

export default ColumnLayouts;
