# react-native-urbi-ui

A set of React Native components that compose Urbi's Design System.

## Usage

Make sure you have all `peerDependencies` installed, and import components/molecules from their folders, e.g.:

    import ButtonCompact from 'react-native-urbi-ui/molecules/buttons/ButtonCompact';

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

## Build

Run `yarn install` to install all dependencies, and `yarn build` to generate the `dist` folder which contains the module. If you want to generate a package with the same structure as the one published on https://www.npmjs.com, run `yarn package`, and find the `react-native-urbi-ui-<version>.tgz` package inside the `dist` folder.

## Showcase

An example react native app that showcases all components/molecules can be found in the `showcase` folder. To make it work, you first have to build the library by running `yarn build`; then, `cd` into the `showcase` folder, and run:

    yarn install
    yarn start
    yarn android # or yarn ios

## Warning

This is an alpha version of the release, use it at your own risk!
