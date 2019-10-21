# react-native-urbi-ui

A set of React Native components that compose Urbi's Design System.

## Warning

This is an alpha version of the release, use it at your own risk!

## Usage

Make sure you have all `peerDependencies` installed, and import components/molecules from their folders, e.g.:

    import ButtonCompact from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';

The design system makes use of an icon font which you must include in your app. The font can be installed by copying the `showcase/android/app/src/main/assets/fonts/urbi.ttf` file into your own app's `android/app/src/main/assets/fonts` folder (create it if it doesn't exist), and by adding that same file to your iOS project's resources, making sure it's copied in the `Copy resources` build phase.

All components/molecules come with their own Typescript definitions. However, if you're using Typescript, you might want to adjust the `compilerOptions.paths` field inside your `tsconfig.json` to include these lines:

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

## Showcase

An example react native app that showcases all components/molecules can be found in the `showcase` folder. To make it work, you first have to build the library by running `yarn build` on the top-level folder of this project; then, `cd` into the `showcase` folder, and run:

    yarn install
    yarn start
    yarn android # or yarn ios

# Development

## Build

Run `yarn install` to install all dependencies, and `yarn build` to generate the `dist` folder which contains the module. If you want to generate a package with the same structure as the one published on https://www.npmjs.com, run `yarn package`, and find the `react-native-urbi-ui-<version>.tgz` package inside the `dist` folder.

## Using the showcase app to preview changes to the library

Because the metro bundler doesn't support regular `npm link`s (see [this issue][1]), we need to rely on [wml][2] to actually copy all files from the library `dist` folder to `showcase/node_modules/react-native-urbi-ui` whenever they change.

The setup works as follows:

    # from the repo top-level folder
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
