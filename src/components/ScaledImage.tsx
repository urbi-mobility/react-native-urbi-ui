import React from "react";
import {Image, ImageRequireSource, ImageSourcePropType} from 'react-native';


type ScaledImageProps = {
    uri: string|ImageRequireSource;
    width?: number,
    height?: number
};

type ScaledImageState= {
    source: ImageSourcePropType;
    width?: number,
    height?: number
};


export default class ScaledImage extends React.PureComponent<ScaledImageProps,ScaledImageState> {
    constructor(props: ScaledImageProps) {
        super(props);
        if(typeof this.props.uri === 'string')
            this.state = { source: { uri: this.props.uri } };
    }

    componentWillMount() {
        if(typeof this.props.uri === 'string')
            Image.getSize(this.props.uri, (width, height) => {
                if (this.props.width && !this.props.height) {
                    this.setState({
                        width: this.props.width,
                        height: height * (this.props.width / width)
                    });
                } else if (!this.props.width && this.props.height) {
                    this.setState({
                        width: width * (this.props.height / height),
                        height: this.props.height
                    });
                } else {
                    this.setState({ width: width, height: height });
                }
            },null);
    }

    render() {
        return (
            <Image
                source={this.state.source}
                style={{ height: this.state.height, width: this.state.width, resizeMode: 'cover'}}
            />
        );
    }

}