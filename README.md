# react-native-urbi-ui

A set of React Native components that compose Urbi's Design System.

## Warning

This is an alpha version of the release, use it at your own risk!

## Installation

Install the library by running:

    yarn add react-native-urbi-ui
    # or npm install react-native-urbi-ui

Then, install all of its peer dependencies:

    yarn add @react-native-community/slider date-fns formik react-native-dialogs react-native-formik react-native-gesture-handler react-native-linear-gradient react-native-modal-datetime-picker react-native-reanimated react-native-typography react-native-vector-icons
    # or npm install the same things

If you're using Typescript, you might want to add this to your `tsconfig.json` file:

    {
        "compilerOptions": {
            /* the rest of your conf here */
            "paths": {
                /* your other mapped paths, if any */
                "react-native-urbi-ui/*": [
                    "node_modules/react-native-urbi-ui/*",
                    "node_modules/react-native-urbi-ui/*.android.d.ts",
                    "node_modules/react-native-urbi-ui/*.ios.d.ts"
                ]
            }
        }
    }

that way, `tsc` will look for platform-specific definition files, which it wouldn't otherwise.

### Android

The library relies on your app embedding Android's `Roboto-Regular.ttf` and `Roboto-Medium.ttf` (so that it looks the same regardless of what the device has set as system font).

If you don't have these 2 files in your project already, create an `android/app/src/main/assets/fonts` folder and save those files there. You can get the files [from Google Fonts][4], or you can download them [from our showcase app's own `fonts` folder][5].

Then, install our icon font by copying it to the same folder as the one holding the Roboto files. On a Unix system:

    # from your project's main folder, where node_modules is
    cp node_modules/react-native-urbi-ui/urbi.ttf android/app/src/main/assets/fonts

### iOS

Copy our icon font and add it as one of your project's resources. You can find the font inside:

    node_modules/react-native-urbi-ui/urbi.ttf

Once copied to your project (e.g., inside the `ios` folder as a top-level file, like our showcase app does), update your XCode settings to include `urbi.ttf` in the `Copy resources` build phase.

## Usage

Import components/molecules from their folders, e.g.:

    import { ButtonCompact } from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';

Every component is exported as either a `React.PureComponent` or as a memoized stateless component (using `React.memo()`). In some cases, unmemoized versions are available, and they're exported using the `Unmemoized` suffix, but you can generally use the component without the `Unmemoized` suffix.

Check out [our showcase app][6] for examples on how to use our molecules and components.

# Development

## Build

Run `yarn install` to install all dependencies, and `yarn build` to generate the `dist` folder which contains the module. If you want to generate a package with the same structure as the one published on https://www.npmjs.com, run `yarn package`, and find the `react-native-urbi-ui-<version>.tgz` package inside the `dist` folder.

## Using the showcase app to preview changes to the library

Because the metro bundler doesn't support regular `npm link`s (see [this issue][1]), we need to rely on [wml][2] (which in turn relies on [watchman][3] to actually copy all files from the library `dist` folder to `showcase/node_modules/react-native-urbi-ui` whenever they change.

The setup works as follows:

    # from the repo top-level folder
    watchman watch dist
    cd showcase
    yarn install
    cd ..
    yarn build
    rm -rf showcase/node_modules/react-native-urbi-ui
    wml add dist/ showcase/node_modules/react-native-urbi-ui
    wml start

Then, launch the showcase app and (optionally) enable hot reload. Then, whenever you want to see your edits on the app, run `yarn build` from the top-level folder.

## Running on VS Code

To run/debug in VS Code, create a configuration as usual, but also add a `settings.json` file inside the `.vscode` folder (which also contains your `launch.json` conf file).

Inside of it, add this:

    {
      "react-native-tools": {
        "projectRoot": "/path/to/react-native-urbi-ui/showcase"
      }
    }

[1]: https://github.com/facebook/metro/issues/1
[2]: https://github.com/wix/wml
[3]: https://github.com/facebook/watchman
[4]: https://fonts.google.com/specimen/Roboto
[5]: https://github.com/urbi-mobility/react-native-urbi-ui/tree/master/showcase/android/app/src/main/assets/fonts
[6]: https://github.com/urbi-mobility/react-native-urbi-ui/tree/master/showcase
