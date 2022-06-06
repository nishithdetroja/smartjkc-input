import React from 'react';
import CurrencyInput from 'react-currency-input-field';

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
    value: any;
    className: string;
    inputStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    disabled: boolean;
    readOnly: boolean;
    tabIndex: number;
    placeholder: string;
    allowDecimals: boolean;
    allowNegativeValue: boolean;
    decimalsLimit: number;
    decimalScale: number;
    fixedDecimalLength: number;
    prefix: string;
    suffix: string;
    decimalSeparator: string;
    groupSeparator: string;
    intlConfig: object;
    disableAbbreviations: boolean;
    disableGroupSeparators: boolean;
    maxLength: number;
    step: number;
};

const SmartjkcNumeric: React.FunctionComponent<IInputMaskProps> = props => {

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
        event.target.selectionStart = event.target.selectionEnd = event.target.value.length;
        onFocusEvent && onFocusEvent(event);
    };

    return (
        <div>
            <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}</label>
            <CurrencyInput
                id={settings.id ? settings.id : name}
                name={name}
                tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                disabled={settings.disabled ? settings.disabled : false}
                readOnly={settings.readOnly ? settings.readOnly : false}
                placeholder={settings.placeholder ? settings.placeholder : ''}
                value={settings?.value ? settings.value : undefined}
                className={settings?.className}
                onValueChange={onChangeEvent}
                style={{ ...inputStyle, ...settings.inputStyle }}
                allowDecimals={settings.allowDecimals ? settings.allowDecimals : undefined}
                allowNegativeValue={settings.allowNegativeValue ? settings.allowNegativeValue : undefined}
                decimalsLimit={settings.decimalsLimit ? settings.decimalsLimit : undefined}
                decimalScale={settings.decimalScale ? settings.decimalScale : undefined}
                fixedDecimalLength={settings.fixedDecimalLength ? settings.fixedDecimalLength : undefined}
                prefix={settings.prefix ? settings.prefix : undefined}
                suffix={settings.suffix ? settings.suffix : undefined}
                decimalSeparator={settings.decimalSeparator ? settings.decimalSeparator : undefined}
                groupSeparator={settings.groupSeparator ? settings.groupSeparator : undefined}
                // intlConfig = {settings.intlConfig ? settings.intlConfig : {}}
                disableAbbreviations={settings.disableAbbreviations ? settings.disableAbbreviations : undefined}
                disableGroupSeparators={settings.disableGroupSeparators ? settings.disableGroupSeparators : undefined}
                maxLength={settings.maxLength ? settings.maxLength : undefined}
                step={settings.step ? settings.step : undefined}
                onBlur={onBlurEvent}
                onFocus={onFocus}
                onKeyUp={onKeyUpEvent}
                onKeyDown={onKeyDownEvent}
            ></CurrencyInput>
        </div>
    );
};

export default SmartjkcNumeric;