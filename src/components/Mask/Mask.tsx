import React from 'react';
import InputMask from 'react-input-mask';

export interface IInputMaskProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent: any;
    onBlurEvent?: any;
    onFocusEvent?: any;
    onKeyUpEvent?: any;
    onKeyDownEvent?: any;
};

export interface ISettingsProps {
    label: string
    value: string,
    className: string
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    mask: string,
    maskChar: string,
    alwaysShowMask: boolean,
};

const Mask: React.FunctionComponent<IInputMaskProps> = (props) => {

    const { name, settings, onChangeEvent, onBlurEvent, onFocusEvent, onKeyUpEvent, onKeyDownEvent } = props;

    let labelStyle: React.CSSProperties = {
        marginBottom: '0px',
        position: 'absolute',
        paddingLeft: '6px',
        fontSize: '11px',
        fontWeight: '700'
    };

    let inputStyle: React.CSSProperties = {
        width: '100%',
        height: '40px',
        padding: '10px 0px 0px 5px',
        fontSize: '15px',
        border: '1px solid',
        outline: 'none'
    };

    const onFocus = (event: any) => {
        event.target.selectionEnd = event.target.selectionStart = 0;
        onFocusEvent && onFocusEvent(event);
    };

    const onKeyUp = (event: any) => {
        if (event.key === '1' ||
            event.key === '2' ||
            event.key === '3' ||
            event.key === '4' ||
            event.key === '5' ||
            event.key === '6' ||
            event.key === '7' ||
            event.key === '8' ||
            event.key === '9' ||
            event.key === '0') {
            event.target.setSelectionRange(event.target.selectionStart, event.target.selectionEnd + 1);
        }
        onKeyUpEvent && onKeyUpEvent(event);
    };

    return (
        <div>
            <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
            <InputMask
                name={name}
                mask={settings.mask ? settings.mask : '99/99/9999'}
                maskChar={settings.maskChar ? settings.maskChar : '#'}
                alwaysShowMask={settings.alwaysShowMask ? settings.alwaysShowMask : true}
                value={settings?.value}
                className={settings?.className}
                style={{ ...inputStyle, ...settings.inputStyle }}
                onChange={onChangeEvent}
                onBlur={onBlurEvent}
                onFocus={onFocus}
                onKeyUp={onKeyUp}
                onKeyDown={onKeyDownEvent}
            ></InputMask>
        </div>
    );
};

export default Mask;