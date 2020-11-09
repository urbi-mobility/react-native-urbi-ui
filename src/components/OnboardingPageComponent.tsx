import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { OnboardingPage, isRemoteImage, onboardingStyles } from 'src/components/Onboarding';
import { colors } from 'src/utils/colors';

const styles = StyleSheet.create({
  Placeholder: {
    backgroundColor: colors.ulisse,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    marginBottom: 24,
  },
  PlaceholderInner: {
    backgroundColor: colors.ukko,
    flex: 1,
  },
});

type OnboardingPageComponentProps = {
  page: OnboardingPage;
  index: number;
  titleLowercase: boolean | undefined;
  maxWidth?: number;
};

export const OnboardingPageComponent = (props: OnboardingPageComponentProps) => {
  const { index, maxWidth, page, titleLowercase } = props;
  const { image } = page;

  const [imageLoaded, setImageLoaded] = useState(false);

  const onImageLoaded = () => setImageLoaded(true);

  let width: number;
  let height: number;

  if (isRemoteImage(image)) {
    ({ width, height } = image);
  } else {
    ({ width, height } = Image.resolveAssetSource(image));
  }

  const aspectRatio = width / height;

  return (
    <View key={index} style={[onboardingStyles.Wrapper, { width: maxWidth }]}>
      <View style={onboardingStyles.ImageContainer}>
        <Image
          source={typeof image === 'string' ? { uri: image } : image}
          style={[onboardingStyles.Image, { aspectRatio }]}
          onLoadEnd={onImageLoaded}
          resizeMode="contain"
        />
        {imageLoaded ? null : (
          <View style={styles.Placeholder}>
            <View style={styles.PlaceholderInner} />
          </View>
        )}
      </View>
      <Text style={onboardingStyles.Title} numberOfLines={2}>
        {titleLowercase ? page.title : page.title.toUpperCase()}
      </Text>
      <Text style={onboardingStyles.Content}>{page.content}</Text>
    </View>
  );
};
