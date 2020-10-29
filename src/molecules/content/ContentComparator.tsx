import React from 'react';
import {
  Dimensions,
  ImageRequireSource,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
  TextStyle,
} from 'react-native';
import { layoutStyles } from 'src/utils/styles';
import { registeredTextStyle } from 'src/utils/textStyles';
import { Chip } from 'src/molecules/Chip';
import { ChipLarge, ChipLargeProps } from 'src/molecules/ChipLarge';
import { colors } from 'src/utils/colors';

const LIST_ITEM_LARGE_PADDING = 28;
const wrapperWidth = (Dimensions.get('window').width - LIST_ITEM_LARGE_PADDING) * 0.6;
const WALK_ICONS_WIDTH = 102;

export const sharedStyles = StyleSheet.create({
  TopRightMargins: {
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 0,
    marginRight: 2,
    marginTop: 4,
  },
});

const styles = StyleSheet.create({
  Wrapper: {
    height: 72,
    ...layoutStyles.ColumnJustifyStart,
    alignItems: 'flex-start',
    width: wrapperWidth,
  },
  Title: registeredTextStyle('title'),
  ContentWrapper: {
    ...layoutStyles.RowAlignCenter,
    width: wrapperWidth,
    justifyContent: 'flex-start',
  },
  BottomLabel: {
    ...registeredTextStyle('body'),
    marginTop: 4,
  },
  TextBody: {
    ...sharedStyles.TopRightMargins,
    ...registeredTextStyle('micro', colors.uto, 'textBody'),
  } as TextStyle,
});

export type ContentComparatorProps = {
  content: DirectionsProps;
  title: string;
  bottomLabel?: string;
};

type ContentComparatorState = {
  lastIndex: number;
};

export type DirectionsProps = {
  walkingToVehicle: number;
  walkingToDestination?: number;
  directionsList: DirectionItem[];
};

interface DirectionItem {
  name: string;
  type?: string;
  isImage?: boolean;
  icon?: ImageRequireSource | string;
  color: string;
  containerStyle?: ChipLargeProps['containerStyle'];
}

const chipProps: ChipLargeProps = {
  label: '',
  color: colors.transparent,
  colorIsLight: true,
  icon: 'walk',
  containerStyle: 'topRightMargins',
};

class ContentComparator extends React.PureComponent<
  ContentComparatorProps,
  ContentComparatorState
> {
  prevIcon?: string | ImageRequireSource;
  viewInformation: { x?: number };

  constructor(props: ContentComparatorProps) {
    super(props);
    this.state = { lastIndex: props.content.directionsList.length };
    this.prevIcon = undefined;
    this.viewInformation = {};
    this.onLayout = this.onLayout.bind(this);
    this.renderTransportIcon = this.renderTransportIcon.bind(this);
    this.updateLastIndex = this.updateLastIndex.bind(this);
  }

  onLayout({ nativeEvent }: LayoutChangeEvent) {
    const { directionsList } = this.props.content;
    const { lastIndex } = this.state;
    const { x, width } = nativeEvent.layout;
    this.viewInformation[x] = width;
    const coordinates = Object.keys(this.viewInformation).sort();
    const shouldSetIndex = (lastIndex && coordinates.length) === directionsList.length;
    if (shouldSetIndex) this.updateLastIndex();
  }

  updateLastIndex() {
    const { walkingToDestination } = this.props.content;
    const coordinates = Object.keys(this.viewInformation).sort();
    const availableSpace = !!walkingToDestination
      ? wrapperWidth - WALK_ICONS_WIDTH
      : wrapperWidth - WALK_ICONS_WIDTH / 2;
    let index = 0;
    let computedWidth = this.viewInformation[coordinates[index]];
    while (computedWidth < availableSpace) {
      computedWidth += this.viewInformation[coordinates[(index += 1)]];
    }
    this.setState({ lastIndex: index });
    this.prevIcon = undefined;
  }

  renderTransportIcon(info: DirectionItem, index: number) {
    const { directionsList } = this.props.content;
    const { color, icon, name, type } = info;
    const { lastIndex } = this.state;
    const showPlusIcon = this.prevIcon && this.prevIcon !== icon;
    this.prevIcon = icon;
    const isImage = typeof icon === 'number';
    const chipLargeProps: ChipLargeProps = {
      containerStyle: isImage ? 'topRightMargins' : 'topLeftMargins',
      color: isImage ? colors.transparent : color,
      label: isImage ? '' : name,
      icon: isImage ? icon : `${icon}-small`,
    };
    const flexShrink = lastIndex === 0 ? 1 : 0;

    return (
      <View
        onLayout={this.onLayout}
        style={{ ...layoutStyles.RowAlignCenter, flexShrink }}
        key={index}
      >
        {showPlusIcon && <Text style={styles.TextBody}>+</Text>}
        <ChipLarge {...chipLargeProps} />
        {directionsList.length === 1 && (
          <View style={{ ...sharedStyles.TopRightMargins, flexShrink }}>
            <Chip alignSelf="center" label={type} bgColor="ulisse" bgState="success" />
          </View>
        )}
      </View>
    );
  }

  render() {
    const {
      bottomLabel,
      title,
      content: { directionsList, walkingToVehicle, walkingToDestination },
    } = this.props;
    const { lastIndex } = this.state;
    const list = directionsList?.slice(0, lastIndex);

    return (
      <View style={styles.Wrapper}>
        <Text style={styles.Title}>{title}</Text>
        <View style={styles.ContentWrapper}>
          <ChipLarge {...chipProps} />
          <Text style={styles.TextBody} numberOfLines={1}>
            {walkingToVehicle.toString()} +
          </Text>
          {list?.map((info, index) => this.renderTransportIcon(info, index))}
          {lastIndex === 0 && this.renderTransportIcon(directionsList[0], 0)}
          {walkingToDestination && (
            <>
              <ChipLarge {...chipProps} />
              <Text style={styles.TextBody} numberOfLines={1}>
                + {walkingToDestination.toString()}
              </Text>
            </>
          )}
        </View>
        <Text style={styles.BottomLabel}>{bottomLabel}</Text>
      </View>
    );
  }
}

export default ContentComparator;
