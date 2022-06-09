import React from 'react';

export interface IInputColorPickerProps {
    name: string;
    settings: ISettingsProps;
    onChangeEvent: any;
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
};

const SmartjkcColorPicker: React.FunctionComponent<IInputColorPickerProps> = props => {

    const { name, settings, onChangeEvent } = props;

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
        padding: '10px 5px 0px 5px',
        fontSize: '15px',
        border: '1px solid',
        outline: 'none',
        background: 'transparent'
    };

    return (
        <div>
            <label style={{ ...labelStyle, ...settings.labelStyle }} htmlFor={name}>{settings.label ? settings.label : 'Label'}-{settings.value}</label>
            <input
                id={settings.id ? settings.id : name}
                name={name}
                tabIndex={settings.tabIndex ? settings.tabIndex : undefined}
                disabled={settings.disabled ? settings.disabled : false}
                readOnly={settings.readOnly ? settings.readOnly : false}
                placeholder={settings.placeholder ? settings.placeholder : ''}
                type="color"
                className={settings?.className}
                style={{ ...inputStyle, ...settings.inputStyle }}
                value={settings.value}
                onChange={onChangeEvent}
            />
        </div>
    );
};

export default SmartjkcColorPicker;