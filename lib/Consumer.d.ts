import * as React from 'react';
import { ViewStyle } from 'react-native';
import { IProvider } from './Host';
interface IConsumerProps {
    children: React.ReactNode;
    manager: IProvider | null;
    style?: ViewStyle;
}
export declare const Consumer: ({ children, manager, style }: IConsumerProps) => null;
export {};
