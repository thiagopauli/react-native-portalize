import * as React from 'react';
import { ViewStyle } from 'react-native';
interface IPortalProps {
    children: React.ReactNode;
    style?: ViewStyle;
}
export declare const Portal: ({ children, style }: IPortalProps) => JSX.Element;
export {};
