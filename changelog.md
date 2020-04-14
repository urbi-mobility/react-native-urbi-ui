# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

- `molecules/content/ChipAndLabel`, `molecules/content/ChipOverLabel`, `molecules/content/ChipAndDoubleLabel`. Preview them in molecules/Content on the showcase app.

### Changed

- `components/ChipGroup` made scrollview 36dp in height, so that the bottom scrollbar doesn't show over its content.

## [0.1.38 - 2020-04-09]

### Added

- `molecules/end/EndRealTime`, a molecule like `EndDoubleLabel`, but with `assets/img/ic_realtime.png` to the left of the top label (internal ref: UR-1568). Preview in components/ListItems on the showcase app.
- `molecules/content/ChipLarge`, a molecule like `Chip` but... larger :) (internal ref: UR-1566). Preview in molecules/Chips on the showcase app.
- `molecules/buttons/toggles/ChipToggle`, a molecule like `IconToggle`, but using a `ChipLarge` instead of an icon.
- `components/ChipGroup`, a horizontally scrollable list of `ChipToggle` items, in which the first tap deactivates all other items. Preview in components/IconGroups on the showcase app.
- new colors in `utils/colors` for public transport: `bus`, `ferry`, `subway`, `train`, and `tram`. Preview in colors on the showcase app.

### Updated

- update icon font to include more transport types, and to fix baseline alignments
