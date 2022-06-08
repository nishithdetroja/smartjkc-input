import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./SmartjkcVerticalmenu.css";

export interface IVerticalMenuProps {
    settings: ISettingsProps;
    onClickEvent?: any;
};

export interface ISettingsProps {
    json: any[];
    navStyle: React.CSSProperties;
    labelStyle: React.CSSProperties;
    menuStyle: React.CSSProperties;
    activeStyle: React.CSSProperties;
    subMenuStyle: React.CSSProperties;
    activeStyleSubMenu: React.CSSProperties;
    iconStyle: React.CSSProperties;
    iconStyleSubMenu: React.CSSProperties;
};

const SmartjkcVerticalMenu: React.FunctionComponent<IVerticalMenuProps> = props => {

    const { settings, onClickEvent } = props;
    const [open, setOpen] = useState('');
    const toggle = (id: any) => {
        setOpen(id);
        onClickEvent && onClickEvent(id);
    };

    let navStyle: React.CSSProperties = {
        width: '100%',
        background: 'white',
        border: '1px solid black'
    };

    let labelStyle: React.CSSProperties = {
        marginBottom: '0px',
        fontSize: '11px',
        fontWeight: '700',
        paddingLeft: '9px',
        paddingBottom: '4px',
    };

    let menuStyle: React.CSSProperties = {
        display: 'block',
        backgroundColor: 'black',
        textDecoration: 'none',
        padding: '8px',
        color: '#fff',
        fontSize: '14px'
    };

    let activeStyle: React.CSSProperties = {
        backgroundColor: '#3EB489',
        color: 'white'
    };

    let subMenuStyle: React.CSSProperties = {
        display: 'block',
        backgroundColor: 'black',
        textDecoration: 'none',
        padding: '8px 8px 8px 30px',
        color: '#fff',
        fontSize: '14px'
    };

    let activeStyleSubMenu: React.CSSProperties = {
        backgroundColor: '#3EB489',
        color: 'white'
    };

    let iconStyle: React.CSSProperties = {
        paddingRight: '9px'
    };

    let iconStyleSubmenu: React.CSSProperties = {
        paddingRight: '5px',
        fontSize: '8px',
        position: 'relative',
        top: '-2px'
    }

    return (
        <nav className="navigation" style={{ ...navStyle, ...settings.navStyle }}>
            {
                settings.json.map((element: any, i: any) => {
                    return (
                        <div key={i}>
                            <label style={{ ...labelStyle, ...settings.labelStyle }}>{element.label}</label>
                            <ul className="mainmenu">
                                {
                                    element.menus.map((menu: any, j: any) => {
                                        return (
                                            <li key={j}>
                                                <NavLink style={({ isActive }) => isActive ? { ...menuStyle, ...settings.menuStyle, ...activeStyle, ...settings.activeStyle } : { ...menuStyle, ...settings.menuStyle }} to={menu.url}
                                                    onClick={() => toggle(menu.name)} >
                                                    <i style={{ ...iconStyle, ...settings.iconStyle }} className={menu.icon || 'fa fa-home'}></i>{menu.name}
                                                    {(menu.child) && <span className="arrow"></span>}
                                                </NavLink>
                                                {
                                                    (menu.child) && <>
                                                        {open === menu.name && (
                                                            <ul className="submenu">
                                                                {
                                                                    menu.child.map((childmenu: any, k: any) => {
                                                                        return (
                                                                            <li key={k}>
                                                                                <NavLink style={({ isActive }) => isActive ? { ...subMenuStyle, ...settings.subMenuStyle, ...activeStyleSubMenu, ...settings.activeStyleSubMenu } : { ...subMenuStyle, ...settings.subMenuStyle }} to={childmenu.url}>
                                                                                    <i style={{ ...iconStyleSubmenu, ...settings.iconStyleSubMenu }} className={childmenu.icon || 'fa fa-circle-o'}></i>{childmenu.name}</NavLink>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        )}
                                                    </>
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </nav >
    );
};

export default SmartjkcVerticalMenu;