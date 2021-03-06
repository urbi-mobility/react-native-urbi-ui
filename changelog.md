# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

## [0.3.15 - 2021-07-14]

### Added

- `CardHeader` added `titleLines` props
- `ListItemTextInputPropsType` added news props and type
- `Note` added textColor

## [0.3.12 - 2021-01-06]

### Added

- added `testID` to all components containing touchable items on any type

### Changed

- bumped `ini` dep (dependabot)
- **non-backwards-compatible** replaced `IconButtonTestID` with `LoginTestID` in `ProviderSettings` (so that `InfoTestID` can be used for the other touchable inside the component)

## [0.3.11 - 2020-11-27]

### Changed

- icon font is no longer part of the library, added instructions as to how to include it on the README

**NOTE**: version 0.3.10 was published by mistake without typescript definitions!

## [0.3.9 - 2020-11-24]

### Added

- `molecules/end/EndIcon` - added new molecule to be added as `end` prop in `ListItem`s
- `molecules/content/Label` - added `numberOfLines` prop to support 2-line labels

## [0.3.8 - 2020-11-23]

### Added

- `components/form/ListItemTextInput` - added `multiline` prop, to enable multiline text inputs (internal ref [UR-2455](https://urbimobility.atlassian.net/browse/UR-2455))

### Fixed

- fixed a require cycle between `Onboarding` and `OnboardingSinglePage`

## [0.3.7 - 2020-11-10]

### Added

- `components/Onboarding` - added option to use an external image by passing a `URI`, along with the image's `width` and `height`, show a placeholder while the image is being loaded

### Fixed

- `App` - fixed TS compilation, translating absolute paths to relative in `d.ts` files, so that VS Code understands them

## [0.3.6 - 2020-10-30]

### Added

- `content/ComparatorModal`, `end/ContentComparator` and `components/ListItemComparator` components

### Changed

- `molecules/Chip` - added `alignSelf` prop to `Chip` with default value `flex-start`
- `molecules/Chip` - added `bgColor` prop to `Chip`
- `molecules/Chip` - added `getWrapperStyle` in `Chip` to customize container style
- `molecules/ChipLarge` - added `containerStyle` prop to `ChipLarge` to set container style
- `molecules/ChipLarge` - changed `icon` prop type and adding `renderImageOrIcon` in `ChipLarge` to allow rendering Images and not only Icons

## [0.3.5 - 2020-09-03]

### Added

- `components/Onboarding` - added `updateParentIndex` and `scrollPage` to allow different CTA Button Handlers (UR-2082)

## [0.3.4 - 2020-09-01]

### Added

- `utils/const` - added `topBarHeight` with the height of the navigation bar (`topBar` in `react-native-navigation`)

### Changed

- `components/Search` - changed icons color to `ulisse` when the background color is dark
- `components/PaymentPanel`, `components/FloatingButtonLayout` - renamed `countBottomTabs` to `accountForBottomTabs`
- `components/OnboardingSinglePage` - explicitely set `position: 'absolute'` for view, hoping to solve the issue with `react-native-navigation` / `react-native-gesture-handler` of transparent modals

## [0.3.3 - 2020-07-22]

### Added

- `components/FilterGroup` - added option to leave out the last button, and make icon configurable via prop

### Fixed

- `molecules/ItemSeparator` - set `useNativeDriver` to `false`, as the `backgroundColor` prop cannot be animated natively

## [0.3.2 - 2020-07-20 => do not use]

### Added

- `components/FilterGroup` - added option to override last button's color

### Fixed

- `molecules/ItemSeparator` - added `useNativeDriver` flag to animation, so that RN stops complaining about it

## [0.3.1 - 2020-07-16]

### Added

- `utils/colors` added function to override design system colors

### Changed

- `components/PurchasePanel` replace price color to `colors.uma`

### Added

- `utils/colors` added function to override design system colors

### Changed

- `components/PurchasePanel` replace price color to `colors.uma`

## [0.2.11 - 2020-07-09]

### Changed

- `molecules/Slider` added event throttling

### Fixed

- `molecules/Slider` fixed slider active area being too large on iOS

## [0.2.10 - 2020-06-05]

### Fixed

- `components/FloatingButtonLayout` fixed issues with keyboard sometimes (and especially on some devices) not pushing/dragging the floating button with it

## [0.2.9 - 2020-06-05]

### Changed

- `components/profileHeaders/ProfilePic` turned camera button into a view (that looks like a button), making the whole area of the profile pic tappable. Using `cover` and cropping profile pics to a circle.

## [0.2.8 - 2020-06-03]

### Fixed

- `components/Snackbar` ditched the whole `firstLine`/`secondLine` implementation in favor of a more useful single `message` prop, which takes care of ellipsizing text if needed

## [0.2.7 - 2020-05-18]

### Fixed

- `components/Snackbar` queuing multiple snackbars works again when Snackbars are dismissed because of their actions being pressed

## [0.2.6 - 2020-05-15]

### Added

- `components/Tooltip` and its companion `components/TooltipContainer`. Can be used directly, or with the `WithTooltip` HOC, also inside `components/Tooltip` (internal ref: UR-1686)

### Fixed

- `components/Snackbar` crop long lines of text when an action is shown, and also when the action is on a line by itself (internal ref: UR-1663)
- `components/Onboarding` add more props to try and make the ScrollView actually paginate

## [0.2.5 - 2020-05-06]

### Added

- `molecules/animations/LoadingCircle` new loading animation made with `react-native-reanimated` and (the newly added) `react-native-svg`

### Changed

- added loading animation to `FilterGroup` when the `manage` prop is set

### Fixed

- `utils/const` fixed `getTabBarHeight` function
- updated default `ListItemSlider` right-hand side label width so that it's not cut on iOS by default

## [0.2.4 - 2020-04-29]

### Added

- `molecules/end/EndChip` and `molecules/end/EndChipAndLabel` (internal ref: UR-1612). Test them on the showcase app in `components/ListItems`

## [0.2.3 - 2020-04-28]

### Fixed

- `components/SnackbarView` - added options to support react-native-navigation, and considered `props.bottomMargin` for the animations; calling onHide() on componentWillUnmount if there's an active timeout.
- `components/Search` - added workaround for nested touchables in `react-native-gesture-handler`

## [0.2.2 - 2020-04-22]

### Added

- added `components/Snackbar` - a new component to use snackbars on both Android and iOS. Test it on the showcase app in `components/Modals / Snackbars`

## [0.2.1 - 2020-04-21]

### Changed

- `fonts` - use embedded Roboto fonts on Android so that the app looks the same regardless of the system font in use (**Read the updated install instructions on the `README.md` file!**)

### Fixed

- `ListItem` fixed separator background color to match the one passed in props

## [0.1.43 - 2020-04-17]

### Changed

- `colors` changed `ughina` value (because design).
- `ListItemTextInput` changed placeholder color to `ursula` (also because design).
- `SearchBar` inverted `ulisse` and `ukko` in light version (...also because design).

## [0.1.42 - 2020-04-16]

### Added

- added note about how to launch `watchman` to `README.md`.
- added metadata to `package.json` (author, contributors, keywords).
- added `molecules/end/EndRealTime`, the one-line version of the (now renamed) `molecules/end/EndRealTimeDouble`.

### Fixed

- crop text in `ChipOverLabel` and `ChipDoubleLabel` (with ellipsis) if it's too long, add `20dp` margin right.
- centered `ChipLarge` _juuuuust_ right.
- removed ghost `4dp` right padding from `EndLabel`

## [0.1.41 - 2020-04-15]

### Changed

- `ChipGroup` is now scrolled to the beginning on `componentDidUpdate()` when its content changes.

### Fixed

- state in `ChipGroup` is now reset on `componentDidUpdate()`, too.
- `onActiveChanged()` callback in `ChipGroup` now mirrors the new toggling logic.
- added more padding right to `ChipLarge` so that text looks centered within the chip.

## [0.1.40 - 2020-04-14]

### Added

- added more `ListItemChip` examples to the showcase app (components/ListItems).

### Fixed

- fixed cropped items in `components/ChipGroup`, and added 4dp top padding.

## [0.1.39 - 2020-04-14]

### Added

- `molecules/content/ChipAndLabel`, `molecules/content/ChipOverLabel`, `molecules/content/ChipAndDoubleLabel`. Preview them in molecules/Content on the showcase app.

### Changed

- `components/ChipGroup` updated scrollview so it takes the whole height of the component, updated logic so that it now enables all toggles when the last active toggle is tapped.

## [0.1.38 - 2020-04-09]

### Added

- `molecules/end/EndRealTime`, a molecule like `EndDoubleLabel`, but with `assets/img/ic_realtime.png` to the left of the top label (internal ref: UR-1568). Preview in components/ListItems on the showcase app.
- `molecules/content/ChipLarge`, a molecule like `Chip` but... larger :) (internal ref: UR-1566). Preview in molecules/Chips on the showcase app.
- `molecules/buttons/toggles/ChipToggle`, a molecule like `IconToggle`, but using a `ChipLarge` instead of an icon.
- `components/ChipGroup`, a horizontally scrollable list of `ChipToggle` items, in which the first tap deactivates all other items. Preview in components/IconGroups on the showcase app.
- new colors in `utils/colors` for public transport: `bus`, `ferry`, `subway`, `train`, and `tram`. Preview in colors on the showcase app.

### Updated

- update icon font to include more transport types, and to fix baseline alignments
