import React from 'react';
import { Image, ImageRequireSource, ImageSourcePropType } from 'react-native';

type ScaledImageProps = {
  uri: string | ImageRequireSource;
  width?: number;
  height?: number;
  onSetHeight?: (key: number) => any;
};

type ScaledImageState = {
  source: ImageSourcePropType;
  width?: number;
  height?: number;
};

export class ScaledImage extends React.PureComponent<ScaledImageProps, ScaledImageState> {
  constructor(props: ScaledImageProps) {
    super(props);
    if (typeof this.props.uri === 'string') this.state = { source: { uri: this.props.uri } };
  }

  UNSAFE_componentWillMount() {
    if (this.props.height && this.props.width) {
      this.setState({ width: this.props.width, height: this.props.height });
    } else if (typeof this.props.uri === 'string') {
      Image.getSize(
        this.props.uri,
        (width, height) => {
          let newHeight = height;
          if (this.props.width && !this.props.height) {
            newHeight = height * (this.props.width / width);
            this.setState({
              width: this.props.width,
              height: newHeight,
            });
          } else if (!this.props.width && this.props.height) {
            this.setState({
              width: width * (this.props.height / height),
              height: this.props.height,
            });
          } else {
            this.setState({ width, height });
          }
          this.props.onSetHeight(newHeight);
        },
        null
      );
    }
  }

  render() {
    return (
      <Image
        source={this.state.source}
        style={{ height: this.state.height, width: this.state.width, resizeMode: 'cover' }}
      />
    );
  }
}
