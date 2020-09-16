"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
exports.Consumer = ({ children, manager, style }) => {
    const key = React.useRef(undefined);
    const checkManager = () => {
        if (!manager) {
            throw new Error('No portal manager defined');
        }
    };
    const handleInit = () => {
        checkManager();
        key.current = manager === null || manager === void 0 ? void 0 : manager.mount(children, style);
    };
    React.useEffect(() => {
        checkManager();
        manager === null || manager === void 0 ? void 0 : manager.update(key.current, children, style);
    }, [children, manager, style]);
    React.useEffect(() => {
        handleInit();
        return () => {
            checkManager();
            manager === null || manager === void 0 ? void 0 : manager.unmount(key.current);
        };
    }, []);
    return null;
};