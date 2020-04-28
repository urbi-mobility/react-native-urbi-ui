# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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

- crop text in `ChipOverLabel` and `ChipDoubleLabel` (with hellipsis) if it's too long, add `20dp` margin right.
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