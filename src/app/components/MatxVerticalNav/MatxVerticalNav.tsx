import classNames from 'classnames';
import './MegaMenu.css';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuthorities } from 'src/app/auth/private-routes';
import { routes } from 'src/app/navigations';
import { AUTHORITIES } from 'src/app/utils/constant';
import { useUser } from '../../contexts/JWTAuthContext';
import { useTranslation } from 'react-i18next';

const translationsForMenuParentItems: string = "menu.parent_menu_items"
const translationsForMenuItemsHeaders: string = "menu.menu_items_headers"
const translationsForMenuItems: string = "menu.menu_items"

const MatxVerticalNav = () => {
    const navigation = useNavigate();
    const { user } = useUser();
    const { t } = useTranslation();

    const items: MenuItem[] = [
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.DASHBOARD,
                    AUTHORITIES.ADMIN
                ])
            }),
            label: t(`${translationsForMenuParentItems}.dashboard`),
            command: () => {
                navigation(routes.Dashboard);
            }
        },
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.SETTINGS,
                    AUTHORITIES.ADMIN
                ])
            }),

            label: t(`${translationsForMenuParentItems}.settings`),
            command: () => {
                navigation(routes.Dashboard);
            }
        },
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.USER_READ,
                    AUTHORITIES.ROLE_READ,
                    AUTHORITIES.ADMIN
                ])
            }),

            label: t(`${translationsForMenuParentItems}.user_management`),
            items: [
                {
                    label: t(`${translationsForMenuItemsHeaders}.users_management`),
                    items: [
                        {
                            className: classNames({
                                'text-white': true,
                                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                    AUTHORITIES.USER_READ,
                                    AUTHORITIES.ADMIN
                                ])
                            }),

                            label: t(`${translationsForMenuItems}.users`),
                            command: () => {
                                navigation(routes.Users);
                            }
                        },
                        {
                            className: classNames({
                                'text-white': true,
                                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                    AUTHORITIES.ROLE_READ,
                                    AUTHORITIES.ADMIN
                                ])
                            }),

                            label: t(`${translationsForMenuItems}.roles`),
                            command: () => {
                                navigation(routes.Roles);
                            }
                        }
                    ]
                }
            ]
        },
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.REPORT_SIGTAS,
                    AUTHORITIES.REPORT_4550_DPS,
                    AUTHORITIES.REPORT_4551_DPS,
                    AUTHORITIES.REPORT_4552_DPS,
                    AUTHORITIES.REPORT_4553_DPS,
                    AUTHORITIES.REPORT_4554_DPS,
                    AUTHORITIES.REPORT_4555_DPS,
                    AUTHORITIES.REPORT_4556_DPS,
                    AUTHORITIES.REPORT_4557_DPS,
                    AUTHORITIES.REPORT_4558_DPS,
                    AUTHORITIES.REPORT_4559_DPS,
                    AUTHORITIES.REPORT_4560_DPS,
                    AUTHORITIES.REPORT_4561_DPS,
                    AUTHORITIES.REPORT_4562_DPS,
                    AUTHORITIES.REPORT_4563_DPS,
                    AUTHORITIES.REPORT_4564_DPS,
                    AUTHORITIES.REPORT_4565_DPS,
                    AUTHORITIES.REPORT_4566_DPS,
                    AUTHORITIES.REPORT_4570_DPS,
                    AUTHORITIES.REPORT_4571_DPS,
                    AUTHORITIES.REPORT_4572_DPS,
                    AUTHORITIES.REPORT_4573_DPS,
                    AUTHORITIES.REPORT_4575_DPS,
                    AUTHORITIES.REPORT_4576_DPS,
                    AUTHORITIES.REPORT_4578_DPS,
                    AUTHORITIES.REPORT_4579_DPS,
                    AUTHORITIES.REPORT_4580_DPS,
                    AUTHORITIES.REPORT_4583_DPS,
                    AUTHORITIES.REPORT_4584_DPS,
                    AUTHORITIES.REPORT_4585_DPS,
                    AUTHORITIES.REPORT_4586_DPS,
                    AUTHORITIES.REPORT_4587_DPS,
                    AUTHORITIES.REPORT_4588_DPS,
                    AUTHORITIES.REPORT_4589_DPS,
                    AUTHORITIES.REPORT_4590_DPS,
                    AUTHORITIES.REPORT_4591_DPS,
                    AUTHORITIES.REPORT_4593_DPS,
                    AUTHORITIES.REPORT_4595_DPS,
                    AUTHORITIES.REPORT_4596_DPS,
                    AUTHORITIES.REPORT_4599_DPS,
                    AUTHORITIES.REPORT_45101_DPS,
                    AUTHORITIES.REPORT_45102_DPS,
                    AUTHORITIES.REPORT_45103_DPS,
                ])
            }),
            label: t(`${translationsForMenuParentItems}.dps`),
            items: [
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_SIGTAS,
                                AUTHORITIES.REPORT_4550_DPS,
                                AUTHORITIES.REPORT_4551_DPS,
                                AUTHORITIES.REPORT_4552_DPS,
                                AUTHORITIES.REPORT_4553_DPS,
                                AUTHORITIES.REPORT_4554_DPS,
                                AUTHORITIES.REPORT_4555_DPS,
                                AUTHORITIES.REPORT_4556_DPS,
                                AUTHORITIES.REPORT_4557_DPS,
                                AUTHORITIES.REPORT_4558_DPS,
                                AUTHORITIES.REPORT_4559_DPS,
                                AUTHORITIES.REPORT_4560_DPS,
                                AUTHORITIES.REPORT_4561_DPS,
                                AUTHORITIES.REPORT_4562_DPS,
                                AUTHORITIES.REPORT_4563_DPS,
                                AUTHORITIES.REPORT_4564_DPS,
                                AUTHORITIES.REPORT_4565_DPS,
                                AUTHORITIES.REPORT_4566_DPS,
                                AUTHORITIES.REPORT_4570_DPS,
                                AUTHORITIES.REPORT_4571_DPS,
                                AUTHORITIES.REPORT_4572_DPS,
                                AUTHORITIES.REPORT_4573_DPS,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.dps_1`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_SIGTAS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.sigtas_report`)} - ${t(`${translationsForMenuItems}.sigtas_report_desc`)}`,
                                command: () => {
                                    navigation(routes.Report);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4550_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4550`)} - ${t(`${translationsForMenuItems}.dps_4550_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4550);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4551_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4551`)} - ${t(`${translationsForMenuItems}.dps_4551_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4551);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4552_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4552`)} - ${t(`${translationsForMenuItems}.dps_4552_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4552);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4553_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4553`)} - ${t(`${translationsForMenuItems}.dps_4553_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4553);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4554_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4554`)} - ${t(`${translationsForMenuItems}.dps_4554_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4554);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4555_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4555`)} - ${t(`${translationsForMenuItems}.dps_4555_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4555);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4556_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4556`)} - ${t(`${translationsForMenuItems}.dps_4556_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4556);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4557_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4557`)} - ${t(`${translationsForMenuItems}.dps_4557_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4557);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4558_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4558`)} - ${t(`${translationsForMenuItems}.dps_4558_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4558);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4559_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4559`)} - ${t(`${translationsForMenuItems}.dps_4559_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4559);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4560_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4560`)} - ${t(`${translationsForMenuItems}.dps_4560_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4560);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4561_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4561`)} - ${t(`${translationsForMenuItems}.dps_4561_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4561);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4562_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4562`)} - ${t(`${translationsForMenuItems}.dps_4562_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4562);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4563_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4563`)} - ${t(`${translationsForMenuItems}.dps_4563_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4563);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4564_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4564`)} - ${t(`${translationsForMenuItems}.dps_4564_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4564);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4565_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4565`)} - ${t(`${translationsForMenuItems}.dps_4565_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4565);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4566_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4566`)} - ${t(`${translationsForMenuItems}.dps_4566_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4566);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4570_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4570`)} - ${t(`${translationsForMenuItems}.dps_4570_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4570);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4571_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4571`)} - ${t(`${translationsForMenuItems}.dps_4571_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4571);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4572_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4572`)} - ${t(`${translationsForMenuItems}.dps_4572_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4572);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4573_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4573`)} - ${t(`${translationsForMenuItems}.dps_4573_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4573);
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_4575_DPS,
                                AUTHORITIES.REPORT_4576_DPS,
                                AUTHORITIES.REPORT_4578_DPS,
                                AUTHORITIES.REPORT_4579_DPS,
                                AUTHORITIES.REPORT_4580_DPS,
                                AUTHORITIES.REPORT_4583_DPS,
                                AUTHORITIES.REPORT_4584_DPS,
                                AUTHORITIES.REPORT_4585_DPS,
                                AUTHORITIES.REPORT_4586_DPS,
                                AUTHORITIES.REPORT_4587_DPS,
                                AUTHORITIES.REPORT_4588_DPS,
                                AUTHORITIES.REPORT_4589_DPS,
                                AUTHORITIES.REPORT_4590_DPS,
                                AUTHORITIES.REPORT_4591_DPS,
                                AUTHORITIES.REPORT_4593_DPS,
                                AUTHORITIES.REPORT_4595_DPS,
                                AUTHORITIES.REPORT_4596_DPS,
                                AUTHORITIES.REPORT_4599_DPS,
                                AUTHORITIES.REPORT_45101_DPS,
                                AUTHORITIES.REPORT_45102_DPS,
                                AUTHORITIES.REPORT_45103_DPS,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.dps_2`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4575_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4575`)} - ${t(`${translationsForMenuItems}.dps_4575_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4575);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4576_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4576`)} - ${t(`${translationsForMenuItems}.dps_4576_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4576);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4578_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4578`)} - ${t(`${translationsForMenuItems}.dps_4578_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4578);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4579_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4579`)} - ${t(`${translationsForMenuItems}.dps_4579_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4579);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4580_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4580`)} - ${t(`${translationsForMenuItems}.dps_4580_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4580);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4583_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4583`)} - ${t(`${translationsForMenuItems}.dps_4583_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4583);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4584_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4584`)} - ${t(`${translationsForMenuItems}.dps_4584_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4584);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4585_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4585`)} - ${t(`${translationsForMenuItems}.dps_4585_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4585);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4586_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4586`)} - ${t(`${translationsForMenuItems}.dps_4586_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4586);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4587_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4587`)} - ${t(`${translationsForMenuItems}.dps_4587_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4587);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4588_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4588`)} - ${t(`${translationsForMenuItems}.dps_4588_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4588);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4589_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4589`)} - ${t(`${translationsForMenuItems}.dps_4589_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4589);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4590_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4590`)} - ${t(`${translationsForMenuItems}.dps_4590_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4590);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4591_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4591`)} - ${t(`${translationsForMenuItems}.dps_4591_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4591);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4593_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4593`)} - ${t(`${translationsForMenuItems}.dps_4593_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4593);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4595_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4595`)} - ${t(`${translationsForMenuItems}.dps_4595_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4595);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4596_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4596`)} - ${t(`${translationsForMenuItems}.dps_4596_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4596);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4599_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_4599`)} - ${t(`${translationsForMenuItems}.dps_4599_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_4599);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_45101_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_45101`)} - ${t(`${translationsForMenuItems}.dps_45101_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_45101);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_45102_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_45102`)} - ${t(`${translationsForMenuItems}.dps_45102_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_45102);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_45103_DPS
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dps_45103`)} - ${t(`${translationsForMenuItems}.dps_45103_desc`)}`,
                                command: () => {
                                    navigation(routes.DPS_45103);
                                }
                            }
                        ]
                    }
                ]
            ]
        },
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.REPORT_4250_TRANSIT,
                    AUTHORITIES.REPORT_4251_TRANSIT,
                    AUTHORITIES.REPORT_4252_TRANSIT,
                    AUTHORITIES.REPORT_4253_TRANSIT,
                    AUTHORITIES.REPORT_4254_TRANSIT,
                    AUTHORITIES.REPORT_4255_TRANSIT,
                    AUTHORITIES.REPORT_4256_TRANSIT,
                    AUTHORITIES.REPORT_4257_TRANSIT,
                    AUTHORITIES.REPORT_4258_TRANSIT,
                    AUTHORITIES.REPORT_4259_TRANSIT,
                    AUTHORITIES.REPORT_4260_TRANSIT,
                    AUTHORITIES.REPORT_4261_TRANSIT,
                    AUTHORITIES.REPORT_4263_TRANSIT,
                    AUTHORITIES.REPORT_4264_TRANSIT,
                    AUTHORITIES.REPORT_4265_TRANSIT,
                    AUTHORITIES.REPORT_4266_TRANSIT,
                    AUTHORITIES.REPORT_4267_TRANSIT,
                    AUTHORITIES.REPORT_4268_TRANSIT,
                    AUTHORITIES.REPORT_4270_TRANSIT,
                    AUTHORITIES.REPORT_4271_TRANSIT,
                    AUTHORITIES.REPORT_4272_TRANSIT,
                    AUTHORITIES.REPORT_4273_TRANSIT,
                    AUTHORITIES.REPORT_4274_TRANSIT,
                    AUTHORITIES.REPORT_4275_TRANSIT,
                    AUTHORITIES.REPORT_4276_TRANSIT,
                    AUTHORITIES.REPORT_4277_TRANSIT,
                    AUTHORITIES.REPORT_4278_TRANSIT,
                    AUTHORITIES.REPORT_4279_TRANSIT,
                    AUTHORITIES.REPORT_4280_TRANSIT,
                    AUTHORITIES.REPORT_4281_TRANSIT,
                    AUTHORITIES.REPORT_4282_TRANSIT,
                    AUTHORITIES.REPORT_4283_TRANSIT,
                    AUTHORITIES.REPORT_4284_TRANSIT,
                ])
            }),

            label: t(`${translationsForMenuParentItems}.transit`),
            items: [
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_4250_TRANSIT,
                                AUTHORITIES.REPORT_4251_TRANSIT,
                                AUTHORITIES.REPORT_4252_TRANSIT,
                                AUTHORITIES.REPORT_4253_TRANSIT,
                                AUTHORITIES.REPORT_4254_TRANSIT,
                                AUTHORITIES.REPORT_4255_TRANSIT,
                                AUTHORITIES.REPORT_4256_TRANSIT,
                                AUTHORITIES.REPORT_4257_TRANSIT,
                                AUTHORITIES.REPORT_4258_TRANSIT,
                                AUTHORITIES.REPORT_4259_TRANSIT,
                                AUTHORITIES.REPORT_4260_TRANSIT,
                                AUTHORITIES.REPORT_4261_TRANSIT,
                                AUTHORITIES.REPORT_4263_TRANSIT,
                                AUTHORITIES.REPORT_4264_TRANSIT,
                                AUTHORITIES.REPORT_4265_TRANSIT,
                                AUTHORITIES.REPORT_4266_TRANSIT,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.transit_1`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4250_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4250`)} - ${t(`${translationsForMenuItems}.transit_4250_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4250);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4251_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4251`)} - ${t(`${translationsForMenuItems}.transit_4251_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4251);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4252_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4252`)} - ${t(`${translationsForMenuItems}.transit_4252_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4252);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4253_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4253`)} - ${t(`${translationsForMenuItems}.transit_4253_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4253);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4254_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4254`)} - ${t(`${translationsForMenuItems}.transit_4254_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4254);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4255_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4255`)} - ${t(`${translationsForMenuItems}.transit_4255_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4255);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4256_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4256`)} - ${t(`${translationsForMenuItems}.transit_4256_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4256);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4257_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4257`)} - ${t(`${translationsForMenuItems}.transit_4257_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4257);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4258_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4258`)} - ${t(`${translationsForMenuItems}.transit_4258_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4258);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4259_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4259`)} - ${t(`${translationsForMenuItems}.transit_4259_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4259);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4260_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4260`)} - ${t(`${translationsForMenuItems}.transit_4260_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4260);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4261_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4261`)} - ${t(`${translationsForMenuItems}.transit_4261_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4261);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4263_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4263`)} - ${t(`${translationsForMenuItems}.transit_4263_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4263);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4264_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4264`)} - ${t(`${translationsForMenuItems}.transit_4264_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4264);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4265_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4265`)} - ${t(`${translationsForMenuItems}.transit_4265_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4265);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4266_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4266`)} - ${t(`${translationsForMenuItems}.transit_4266_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4266);
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_4267_TRANSIT,
                                AUTHORITIES.REPORT_4268_TRANSIT,
                                AUTHORITIES.REPORT_4270_TRANSIT,
                                AUTHORITIES.REPORT_4271_TRANSIT,
                                AUTHORITIES.REPORT_4272_TRANSIT,
                                AUTHORITIES.REPORT_4273_TRANSIT,
                                AUTHORITIES.REPORT_4274_TRANSIT,
                                AUTHORITIES.REPORT_4275_TRANSIT,
                                AUTHORITIES.REPORT_4276_TRANSIT,
                                AUTHORITIES.REPORT_4277_TRANSIT,
                                AUTHORITIES.REPORT_4278_TRANSIT,
                                AUTHORITIES.REPORT_4279_TRANSIT,
                                AUTHORITIES.REPORT_4280_TRANSIT,
                                AUTHORITIES.REPORT_4281_TRANSIT,
                                AUTHORITIES.REPORT_4282_TRANSIT,
                                AUTHORITIES.REPORT_4283_TRANSIT,
                                AUTHORITIES.REPORT_4284_TRANSIT,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.transit_2`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4267_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4267`)} - ${t(`${translationsForMenuItems}.transit_4267_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4267);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4268_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4268`)} - ${t(`${translationsForMenuItems}.transit_4268_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4268);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4270_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4270`)} - ${t(`${translationsForMenuItems}.transit_4270_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4270);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4271_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4271`)} - ${t(`${translationsForMenuItems}.transit_4271_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4271);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4272_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4272`)} - ${t(`${translationsForMenuItems}.transit_4272_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4272);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4273_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4273`)} - ${t(`${translationsForMenuItems}.transit_4273_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4273);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4274_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4274`)} - ${t(`${translationsForMenuItems}.transit_4274_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4274);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4275_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4275`)} - ${t(`${translationsForMenuItems}.transit_4275_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4275);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4276_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4276`)} - ${t(`${translationsForMenuItems}.transit_4276_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4276);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4277_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4277`)} - ${t(`${translationsForMenuItems}.transit_4277_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4277);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4278_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4278`)} - ${t(`${translationsForMenuItems}.transit_4278_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4278);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4279_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4279`)} - ${t(`${translationsForMenuItems}.transit_4279_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4279);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4280_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4280`)} - ${t(`${translationsForMenuItems}.transit_4280_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4280);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4281_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4281`)} - ${t(`${translationsForMenuItems}.transit_4281_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4281);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4282_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4282`)} - ${t(`${translationsForMenuItems}.transit_4282_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4282);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4283_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4283`)} - ${t(`${translationsForMenuItems}.transit_4283_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4283);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4284_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.transit_4284`)} - ${t(`${translationsForMenuItems}.transit_4284_desc`)}`,
                                command: () => {
                                    navigation(routes.Transit_4284);
                                }
                            }
                        ]
                    }
                ]
            ]
        },
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.REPORT_4150_REVENUE,
                    AUTHORITIES.REPORT_4151_REVENUE,
                    AUTHORITIES.REPORT_4152_REVENUE,
                    AUTHORITIES.REPORT_4153_REVENUE,
                    AUTHORITIES.REPORT_4153_1400_REVENUE,
                    AUTHORITIES.REPORT_4154_REVENUE,
                    AUTHORITIES.REPORT_4155_REVENUE,
                    AUTHORITIES.REPORT_4157_1400_REVENUE,
                    AUTHORITIES.REPORT_4158_REVENUE,
                    AUTHORITIES.REPORT_4159_REVENUE,
                    AUTHORITIES.REPORT_4160_REVENUE,
                    AUTHORITIES.REPORT_4161_REVENUE,
                    AUTHORITIES.REPORT_4162_REVENUE,
                    AUTHORITIES.REPORT_4163_REVENUE,
                    AUTHORITIES.REPORT_4164_REVENUE,
                    AUTHORITIES.REPORT_4164_1400_REVENUE,
                    AUTHORITIES.REPORT_4165_REVENUE,
                    AUTHORITIES.REPORT_4169_REVENUE,
                    AUTHORITIES.REPORT_4170_REVENUE,
                    AUTHORITIES.REPORT_4171_1400_REVENUE,
                    AUTHORITIES.REPORT_4171_REVENUE,
                    AUTHORITIES.REPORT_4172_REVENUE,
                    AUTHORITIES.REPORT_4173_REVENUE,
                    AUTHORITIES.REPORT_48100_REVENUE,
                    AUTHORITIES.REPORT_48101_REVENUE
                ])
            }),

            label: t(`${translationsForMenuParentItems}.revenue`),
            items: [
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_4150_REVENUE,
                                AUTHORITIES.REPORT_4151_REVENUE,
                                AUTHORITIES.REPORT_4152_REVENUE,
                                AUTHORITIES.REPORT_4153_REVENUE,
                                AUTHORITIES.REPORT_4153_1400_REVENUE,
                                AUTHORITIES.REPORT_4154_REVENUE,
                                AUTHORITIES.REPORT_4155_REVENUE,
                                AUTHORITIES.REPORT_4157_1400_REVENUE,
                                AUTHORITIES.REPORT_4158_REVENUE,
                                AUTHORITIES.REPORT_4159_REVENUE,
                                AUTHORITIES.REPORT_4160_REVENUE,
                                AUTHORITIES.REPORT_4161_REVENUE,
                                AUTHORITIES.REPORT_4162_REVENUE,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.revenue_1`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4150_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4150`)} - ${t(`${translationsForMenuItems}.revenue_4150_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4150);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4151_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4151`)} - ${t(`${translationsForMenuItems}.revenue_4151_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4151);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4152_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4152`)} - ${t(`${translationsForMenuItems}.revenue_4152_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4152);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4153_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4153`)} - ${t(`${translationsForMenuItems}.revenue_4153_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4153);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4153_1400_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4153_1400`)} - ${t(`${translationsForMenuItems}.revenue_4153_1400_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4153_1400);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4154_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4154`)} - ${t(`${translationsForMenuItems}.revenue_4154_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4154);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4155_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4155`)} - ${t(`${translationsForMenuItems}.revenue_4155_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4155);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4157_1400_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4157_1400`)} - ${t(`${translationsForMenuItems}.revenue_4157_1400_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4157_1400);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4158_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4158`)} - ${t(`${translationsForMenuItems}.revenue_4158_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4158);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4159_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4159`)} - ${t(`${translationsForMenuItems}.revenue_4159_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4159);
                                }
                            },

                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4160_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4160`)} - ${t(`${translationsForMenuItems}.revenue_4160_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4160);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4161_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4161`)} - ${t(`${translationsForMenuItems}.revenue_4161_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4161);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4162_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4162`)} - ${t(`${translationsForMenuItems}.revenue_4162_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4162);
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_4163_REVENUE,
                                AUTHORITIES.REPORT_4164_REVENUE,
                                AUTHORITIES.REPORT_4164_1400_REVENUE,
                                AUTHORITIES.REPORT_4165_REVENUE,
                                AUTHORITIES.REPORT_4169_REVENUE,
                                AUTHORITIES.REPORT_4170_REVENUE,
                                AUTHORITIES.REPORT_4171_1400_REVENUE,
                                AUTHORITIES.REPORT_4171_REVENUE,
                                AUTHORITIES.REPORT_4172_REVENUE,
                                AUTHORITIES.REPORT_4173_REVENUE,
                                AUTHORITIES.REPORT_48100_REVENUE,
                                AUTHORITIES.REPORT_48101_REVENUE,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.revenue_2`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4163_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4163`)} - ${t(`${translationsForMenuItems}.revenue_4163_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4163);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4164_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4164`)} - ${t(`${translationsForMenuItems}.revenue_4164_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4164);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4164_1400_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4164_1400`)} - ${t(`${translationsForMenuItems}.revenue_4164_1400_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4164_1400);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4165_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4165`)} - ${t(`${translationsForMenuItems}.revenue_4165_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4165);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4169_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4169`)} - ${t(`${translationsForMenuItems}.revenue_4169_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4169);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4170_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4170`)} - ${t(`${translationsForMenuItems}.revenue_4170_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4170);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4171_1400_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4171_1400`)} - ${t(`${translationsForMenuItems}.revenue_4171_1400_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4171_1400);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4171_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4171`)} - ${t(`${translationsForMenuItems}.revenue_4171_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4171);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4172_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4172`)} - ${t(`${translationsForMenuItems}.revenue_4172_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4172);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4173_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_4173`)} - ${t(`${translationsForMenuItems}.revenue_4173_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_4173);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_48100_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_48100`)} - ${t(`${translationsForMenuItems}.revenue_48100_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_48100);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_48101_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.revenue_48101`)} - ${t(`${translationsForMenuItems}.revenue_48101_desc`)}`,
                                command: () => {
                                    navigation(routes.Revenue_48101);
                                }
                            }
                        ]
                    }
                ]
            ]
        },
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.REPORT_4650_VALUATION,
                    AUTHORITIES.REPORT_4652_VALUATION,
                    AUTHORITIES.REPORT_4653_VALUATION,
                    AUTHORITIES.REPORT_4654_VALUATION,
                    AUTHORITIES.REPORT_4656_VALUATION,
                    AUTHORITIES.REPORT_4657_VALUATION,
                    AUTHORITIES.REPORT_4658_VALUATION,
                    AUTHORITIES.Report_4750_Exemption,
                    AUTHORITIES.Report_4752_Exemption,
                    AUTHORITIES.Report_4753_Exemption,
                    AUTHORITIES.Report_4754_Exemption,
                    AUTHORITIES.Report_4755_Exemption,

                ])
            }),

            label: t(`${translationsForMenuParentItems}.valuation_exemption`),
            items: [
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_4650_VALUATION,
                                AUTHORITIES.REPORT_4652_VALUATION,
                                AUTHORITIES.REPORT_4653_VALUATION,
                                AUTHORITIES.REPORT_4654_VALUATION,
                                AUTHORITIES.REPORT_4656_VALUATION,
                                AUTHORITIES.REPORT_4657_VALUATION,
                                AUTHORITIES.REPORT_4658_VALUATION
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.valuation`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4650_VALUATION,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.valuation_4650`)} - ${t(`${translationsForMenuItems}.valuation_4650_desc`)}`,
                                command: () => {
                                    navigation(routes.Valuation_4650);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4652_VALUATION,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.valuation_4652`)} - ${t(`${translationsForMenuItems}.valuation_4652_desc`)}`,
                                command: () => {
                                    navigation(routes.Valuation_4652);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4653_VALUATION,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.valuation_4653`)} - ${t(`${translationsForMenuItems}.valuation_4653_desc`)}`,
                                command: () => {
                                    navigation(routes.Valuation_4653);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4654_VALUATION,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.valuation_4654`)} - ${t(`${translationsForMenuItems}.valuation_4654_desc`)}`,
                                command: () => {
                                    navigation(routes.Valuation_4654);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4656_VALUATION,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.valuation_4656`)} - ${t(`${translationsForMenuItems}.valuation_4656_desc`)}`,
                                command: () => {
                                    navigation(routes.Valuation_4656);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4657_VALUATION,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.valuation_4657`)} - ${t(`${translationsForMenuItems}.valuation_4657_desc`)}`,
                                command: () => {
                                    navigation(routes.Valuation_4657);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4658_VALUATION,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.valuation_4658`)} - ${t(`${translationsForMenuItems}.valuation_4658_desc`)}`,
                                command: () => {
                                    navigation(routes.Valuation_4658);
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.Report_4750_Exemption,
                                AUTHORITIES.Report_4752_Exemption,
                                AUTHORITIES.Report_4753_Exemption,
                                AUTHORITIES.Report_4754_Exemption,
                                AUTHORITIES.Report_4755_Exemption,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.exemption`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.Report_4750_Exemption,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.exemption_4750`)} - ${t(`${translationsForMenuItems}.exemption_4750_desc`)}`,
                                command: () => {
                                    navigation(routes.Exemption_4750);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.Report_4752_Exemption,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.exemption_4752`)} - ${t(`${translationsForMenuItems}.exemption_4752_desc`)}`,
                                command: () => {
                                    navigation(routes.Exemption_4752);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.Report_4753_Exemption,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.exemption_4753`)} - ${t(`${translationsForMenuItems}.exemption_4753_desc`)}`,
                                command: () => {
                                    navigation(routes.Exemption_4753);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.Report_4754_Exemption,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.exemption_4754`)} - ${t(`${translationsForMenuItems}.exemption_4754_desc`)}`,
                                command: () => {
                                    navigation(routes.Exemption_4754);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.Report_4755_Exemption,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.exemption_4755`)} - ${t(`${translationsForMenuItems}.exemption_4755_desc`)}`,
                                command: () => {
                                    navigation(routes.Exemption_4755);
                                }
                            }
                        ]
                    }
                ]
            ]
        },
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.REPORT_4350_SELECTIVITY,
                    AUTHORITIES.REPORT_4351_SELECTIVITY,
                    AUTHORITIES.REPORT_4352_SELECTIVITY,
                    AUTHORITIES.REPORT_4353_SELECTIVITY,
                    AUTHORITIES.REPORT_4354_SELECTIVITY,
                    AUTHORITIES.REPORT_4355_SELECTIVITY,
                    AUTHORITIES.REPORT_4356_SELECTIVITY,
                    AUTHORITIES.REPORT_4360_SELECTIVITY,
                    AUTHORITIES.REPORT_4361_SELECTIVITY,
                    AUTHORITIES.REPORT_5050_DATAEXCHANGE,
                    AUTHORITIES.REPORT_5051_DATAEXCHANGE,
                    AUTHORITIES.REPORT_5053_DATAEXCHANGE,
                    AUTHORITIES.REPORT_5054_DATAEXCHANGE
                ])
            }),

            label: t(`${translationsForMenuParentItems}.selectivity_dataExchange`),
            items: [
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_4350_SELECTIVITY,
                                AUTHORITIES.REPORT_4351_SELECTIVITY,
                                AUTHORITIES.REPORT_4352_SELECTIVITY,
                                AUTHORITIES.REPORT_4353_SELECTIVITY,
                                AUTHORITIES.REPORT_4354_SELECTIVITY,
                                AUTHORITIES.REPORT_4355_SELECTIVITY,
                                AUTHORITIES.REPORT_4356_SELECTIVITY,
                                AUTHORITIES.REPORT_4360_SELECTIVITY,
                                AUTHORITIES.REPORT_4361_SELECTIVITY,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.selectivity`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4350_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4350`)} - ${t(`${translationsForMenuItems}.selectivity_4350_desc`)}`,
                                command: () => {
                                    navigation(routes.Selectivity_4350);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4351_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4351`)} - ${t(`${translationsForMenuItems}.selectivity_4351_desc`)}`,
                                command: () => {
                                    navigation(routes.Selectivity_4351);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4352_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4352`)} - ${t(`${translationsForMenuItems}.selectivity_4352_desc`)}`,
                                command: () => {
                                    navigation(routes.Selectivity_4352);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4353_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4353`)} - ${t(`${translationsForMenuItems}.selectivity_4353_desc`)}`,
                                command: () => {
                                    navigation(routes.Selectivity_4353);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4354_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4354`)} - ${t(`${translationsForMenuItems}.selectivity_4354_desc`)}`,
                                command: () => {
                                    navigation(routes.Selectivity_4354);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4355_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4355`)} - ${t(`${translationsForMenuItems}.selectivity_4355_desc`)}`,
                                command: () => {
                                    navigation(routes.Selectivity_4355);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4356_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4356`)} - ${t(`${translationsForMenuItems}.selectivity_4356_desc`)}`,
                                command: () => {
                                    navigation(routes.Selectivity_4356);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4360_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4360`)} - ${t(`${translationsForMenuItems}.selectivity_4360_desc`)}`,
                                command: () => {
                                    navigation('/SelectivityReport4360');
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4361_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.selectivity_4361`)} - ${t(`${translationsForMenuItems}.selectivity_4361_desc`)}`,
                                command: () => {
                                    navigation('/SelectivityReport4361');
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN,
                                AUTHORITIES.REPORT_5050_DATAEXCHANGE,
                                AUTHORITIES.REPORT_5051_DATAEXCHANGE,
                                AUTHORITIES.REPORT_5053_DATAEXCHANGE,
                                AUTHORITIES.REPORT_5054_DATAEXCHANGE,
                            ])
                        }),
                        label: t(`${translationsForMenuItemsHeaders}.dataExchange`),
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_5050_DATAEXCHANGE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dataExchange_5050`)} - ${t(`${translationsForMenuItems}.dataExchange_5050_desc`)}`,
                                command: () => {
                                    navigation(routes.DataExchange_5050);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_5051_DATAEXCHANGE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dataExchange_5051`)} - ${t(`${translationsForMenuItems}.dataExchange_5051_desc`)}`,
                                command: () => {
                                    navigation(routes.DataExchange_5051);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_5053_DATAEXCHANGE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dataExchange_5053`)} - ${t(`${translationsForMenuItems}.dataExchange_5053_desc`)}`,
                                command: () => {
                                    navigation(routes.DataExchange_5053);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_5054_DATAEXCHANGE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: `${t(`${translationsForMenuItems}.dataExchange_5054`)} - ${t(`${translationsForMenuItems}.dataExchange_5054_desc`)}`,
                                command: () => {
                                    navigation(routes.DataExchange_5054);
                                }
                            }
                        ]
                    }
                ]
            ]
        },
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.REPORT_4450_MANIFEST
                ])
            }),

            label: t(`${translationsForMenuParentItems}.manifest`),
            command: () => {
                navigation(routes.Manifest_4450);
            }
        }
    ];

    return (
        <MegaMenu
            className="menu"
            style={{
                zIndex: 100,
                background: 'transparent',
                border: 'none'
            }}
            model={items}
            orientation="vertical"
            breakpoint={'1060px'}
        />
    );
};

export default React.memo(MatxVerticalNav);
