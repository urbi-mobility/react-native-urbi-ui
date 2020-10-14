import React, { Component } from 'react';
import {
  Dimensions,
  ImageRequireSource,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { layoutStyles } from 'src/utils/styles';
import { registeredTextStyle } from 'src/utils/textStyles';
import { Chip } from 'src/molecules/Chip';
import { ChipLarge, ChipLargeProps } from 'src/molecules/ChipLarge';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Wrapper: {
    height: 72,
    ...layoutStyles.ColumnJustifyStart,
    alignItems: 'flex-start',
    width: '60%',
  },
  Title: registeredTextStyle('title'),
  Content: {
    ...layoutStyles.RowAlignCenter,
    justifyContent: 'flex-start',
  },
  BottomLabel: {
    ...registeredTextStyle('body'),
    marginTop: 4,
  },
});

const textStyles = StyleSheet.create({
  Body: {
    ...layoutStyles.SingleModalContainer,
    ...registeredTextStyle('micro'),
    color: colors.uto,
  },
});

const LIST_ITEM_LARGE_PADDING = 28;
const wrapperWidth = (Dimensions.get('window').width - LIST_ITEM_LARGE_PADDING) * 0.6;
const WALK_ICONS_WIDTH = 102;

export type ComparatorSingleProps = {
  content: DirectionsProps;
  title: string;
  bottomLabel?: string;
};

type ComparatorSingleState = {
  lastIndex: number;
};

export type DirectionsProps = {
  walkingToVehicle: number;
  providerIcon: string;
  walkingToDestination?: number;
  vehicleModel?: string;
  directionsList?: DirectionItem[];
  type: string;
  name: string;
};

interface DirectionItem extends ChipLargeProps {
  name: string;
  type?: string;
  isImage?: boolean;
}

class ComparatorSingleModal extends Component<ComparatorSingleProps, ComparatorSingleState> {
  prevIcon: undefined | string | ImageRequireSource;
  computedWidth: number;
  prevIndex: number;
  constructor(props: ComparatorSingleProps) {
    super(props);
    const { directionsList } = props.content;
    const defaultIndex = directionsList ? directionsList.length : 0;
    this.state = { lastIndex: defaultIndex };
    this.computedWidth = 0;
    this.prevIndex = 0;
    this.prevIcon = undefined;
    this.onLayout = this.onLayout.bind(this);
    this.renderTransportIcon = this.renderTransportIcon.bind(this);
  }

  onLayout({ nativeEvent }: LayoutChangeEvent) {
    this.computedWidth += nativeEvent.layout.width;
    this.prevIndex = this.prevIndex + 1;
    const availableSpace = !!this.props.content.walkingToDestination
      ? wrapperWidth - WALK_ICONS_WIDTH
      : wrapperWidth - WALK_ICONS_WIDTH / 2;
    const containerLimitReached = this.computedWidth > availableSpace;
    if (containerLimitReached) {
      this.setState({ lastIndex: this.prevIndex });
      this.prevIcon = undefined;
    }
  }

  renderTransportIcon(info: DirectionItem, index: number) {
    const { lastIndex } = this.state;
    const { color, icon, name } = info;
    const { directionsList } = this.props.content;
    const showPlusIcon = this.prevIcon && this.prevIcon !== icon;
    this.prevIcon = icon;
    const shouldCheckLayout = lastIndex === directionsList?.length && lastIndex > 2;
    const isImage = typeof icon === 'number';
    const chipLargeProps: ChipLargeProps = {
      containerStyle: isImage ? 'noPadding' : 'topLeftMargins',
      color: isImage ? colors.transparent : color,
      label: isImage ? '' : name,
      icon: isImage ? icon : `${icon}-small`,
    };
    return (
      <View
        onLayout={shouldCheckLayout ? this.onLayout : undefined}
        style={{ ...layoutStyles.RowAlignCenter }}
        key={index}
      >
        {showPlusIcon && <Text style={textStyles.Body}>+</Text>}
        <ChipLarge {...chipLargeProps} />
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
    const list: DirectionItem[] | undefined = directionsList?.slice(0, lastIndex);
    const iconProps: ChipLargeProps = {
      label: '',
      color: colors.transparent,
      colorIsLight: true,
      icon: 'walk',
      containerStyle: 'noPadding',
    };
    return (
      <View style={styles.Wrapper}>
        <Text style={styles.Title}>{title}</Text>
        <View style={styles.Content}>
          <View style={{ ...layoutStyles.RowAlignCenter, width: wrapperWidth }}>
            <ChipLarge {...iconProps} />
            <Text style={textStyles.Body} numberOfLines={1}>
              {walkingToVehicle.toString()}
            </Text>
            <Text style={textStyles.Body}>+</Text>
            {list?.map((info, index) => this.renderTransportIcon(info, index))}
            {directionsList?.length === 1 && (
              <View style={layoutStyles.SingleModalContainer}>
                <Chip
                  alignSelf="center"
                  label={directionsList[0].type!}
                  bgColor="ulisse"
                  bgState="success"
                />
              </View>
            )}
            {walkingToDestination && (
              <>
                <Text style={textStyles.Body}>+</Text>
                <ChipLarge {...iconProps} />
                <Text style={textStyles.Body} numberOfLines={1}>
                  {walkingToDestination.toString()}
                </Text>
              </>
            )}
          </View>
        </View>
        <Text style={styles.BottomLabel}>{bottomLabel}</Text>
      </View>
    );
  }
}

export default ComparatorSingleModal;
