import * as React from 'react';
import { ViewStyle } from 'react-native';
interface IHostProps {
    children: React.ReactNode;
    style?: ViewStyle;
}
export interface IProvider {
    mount(children: React.ReactNode, style?: ViewStyle): string;
    update(key?: string, children?: React.ReactNode, style?: ViewStyle): void;
    unmount(key?: string): void;
}
export declare const Context: React.Context<IProvider | null>;
export declare const Host: ({ children, style }: IHostProps) => JSX.Element;
export {};