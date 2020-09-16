import * as React from 'react';
import { ViewStyle } from 'react-native';
export interface IManagerHandles {
    mount(key: string, children: React.ReactNode, style?: ViewStyle): void;
    update(key?: string, children?: React.ReactNode, style?: ViewStyle): void;
    unmount(key?: string): void;
}
export declare const Manager: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
