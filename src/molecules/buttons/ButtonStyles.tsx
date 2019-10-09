import { ButtonStyle } from '../../molecules/buttons/types';
import { colors } from '../../utils/colors';

export const styles = (props: { buttonStyle: ButtonStyle; colorOverride?: string }) => {
  switch (props.buttonStyle) {
    case 'primary': {
      return {
        backgroundColor: colors.primary,
        color: props.colorOverride || colors.ulisse,
        loadingColor: colors.ulisse,
      };
    }
    case 'secondary':
      return {
        backgroundColor: colors.transparent,
        color: props.colorOverride || colors.primary,
        loadingColor: colors.ulisse,
        noShadow: true,
        isUppercase: false,
      };
    case 'switched-off':
      return {
        backgroundColor: colors.uma,
        color: colors.ulisse,
        loadingColor: colors.ulisse,
        noShadow: true,
      };
    case 'brand':
      return {
        backgroundColor: colors.brand,
        color: colors.ulisse,
        loadingColor: colors.ulisse,
      };
    default:
      return {
        backgroundColor: colors.ulisse,
        color: props.colorOverride || colors.primary,
        loadingColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.ukko,
      };
  }
};
