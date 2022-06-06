import React from 'react';
import NumericInput from 'react-numeric-input';

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
    id: string;
    label: string;
    value: string;
    className: string;
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    disabled: boolean;
    readOnly: boolean;
    tabIndex: number;
    placeholder: string;
    min: number;
    max: number;
    step: number;
    precision: number;
    size: number;
};

const SmartjkcUpDown: React.FunctionComponent<IInputMaskProps> = props => {

    const { name, settings, onChangeEvent, onBlurEvent, onFocusEvent, onKeyUpEvent, onKeyDownEvent } = props;

    let labelStyle: React.CSSProperties = {
        marginBottom: '0px',
        position: 'absolute',
        paddingLeft: '6px',
        fontSize: '11px',
        fontWeight: '700',
        zIndex: '1'
    };

    let inputStyle: React.CSSProperties = {
        width: '100%',
        height: '40px',
        padding: '10px 0px 0px 5px',
        fontSize: '15px',
        border: '1px solid',
        outline: 'none',
    };


    return (
        <div>
            <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
            <NumericInput
                id={settings.id ? settings.id : name}
                name={name}
                tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                disabled={settings.disabled ? settings.disabled : false}
                readOnly={settings.readOnly ? settings.readOnly : false}
                placeholder={settings.placeholder ? settings.placeholder : ''}
                value={settings?.value}
                className={settings?.className}
                style={{ input: { ...inputStyle, ...settings.inputStyle } }}
                min={settings.min ? settings.min : undefined}
                max={settings.max ? settings.max : undefined}
                step={settings.step ? settings.step : undefined}
                precision={settings.precision ? settings.precision : undefined}
                size={settings.size ? settings.size : undefined}
                onChange={onChangeEvent}
                onBlur={onBlurEvent}
                onFocus={onFocusEvent}
                onKeyUp={onKeyUpEvent}
                onKeyDown={onKeyDownEvent}
            ></NumericInput>
        </div>
    );
};

export default SmartjkcUpDown;