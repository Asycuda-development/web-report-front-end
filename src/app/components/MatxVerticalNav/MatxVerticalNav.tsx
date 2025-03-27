// import { Box, ButtonBase, Icon, styled } from '@mui/material';
// import React, { Fragment } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Paragraph, Span } from '../Typography';
// import MatxVerticalNavExpansionPanel from './MatxVerticalNavExpansionPanel';
// import { useSettingsStore } from '../../contexts/SettingsContext';
// import { useUser } from '../../contexts/JWTAuthContext';
// import { checkAuthorities } from '../../auth/private-routes';
// import { routes } from 'src/app/navigations';
// const ListLabel = styled(Paragraph)(
//   ({ theme, mode }: { theme: any; mode: any }) =>
//     ({
//       fontSize: '12px',
//       marginTop: '20px',
//       marginLeft: '15px',
//       marginBottom: '10px',
//       textTransform: 'uppercase',
//       display: mode === 'compact' && 'none',
//       color: theme.palette.text.secondary
//     } as any)
// );

// const ExtAndIntCommon = {
//   display: 'flex',
//   overflow: 'hidden',
//   borderRadius: '4px',
//   height: 44,
//   whiteSpace: 'pre',
//   marginBottom: '8px',
//   textDecoration: 'none',
//   justifyContent: 'space-between',
//   transition: 'all 150ms ease-in',
//   '&:hover': { background: 'rgba(255, 255, 255, 0.08)' },
//   '&.compactNavItem': {
//     overflow: 'hidden',
//     justifyContent: 'center !important'
//   },
//   '& .icon': {
//     fontSize: '18px',
//     paddingLeft: '16px',
//     paddingRight: '16px',
//     verticalAlign: 'middle'
//   }
// };
// const ExternalLink = styled('a' as any)(
//   ({ theme }: any) =>
//     ({
//       ...ExtAndIntCommon,
//       color: theme.palette.text.primary
//     } as any)
// );

// const InternalLink = styled(Box)(({ theme }) => ({
//   '& a': {
//     ...ExtAndIntCommon,
//     color: theme.palette.text.primary
//   },
//   '& .navItemActive': {
//     backgroundColor: 'rgba(255, 255, 255, 0.16)'
//   }
// }));

// const StyledText = styled(Span)(
//   ({ mode }) =>
//     ({
//       fontSize: '0.875rem',
//       paddingLeft: '0.8rem',
//       display: mode === 'compact' && 'none'
//     } as any)
// );

// const BulletIcon = styled('div')(({ theme }) => ({
//   padding: '2px',
//   marginLeft: '24px',
//   marginRight: '8px',
//   overflow: 'hidden',
//   borderRadius: '300px',
//   background: theme.palette.text.primary
// }));

// const BadgeValue = styled('div')(() => ({
//   padding: '1px 8px',
//   overflow: 'hidden',
//   borderRadius: '300px'
// }));

// const MatxVerticalNav = () => {
//   const { user } = useUser((state) => state);
//   const { settings } = useSettingsStore();
//   const { mode } = settings.layout1Settings.leftSidebar;

//   const navigations = [
//     { name: 'Dashboard', path: '/dashboard', icon: 'dashboard', isHidden: true },
//     { label: 'Settings', type: 'label' },
//     {
//       name: 'Settings',
//       icon: 'setting',
//       children: [
//         { name: 'Users', path: '/users/list' },
//         {
//           name: 'Roles',
//           iconText: 'SU',
//           path: '/roles/list',
//           isHidden: !checkAuthorities(user.authorities, ['User:Read'])
//         }
//       ],
//       isHidden: false
//     },

//     {
//       name: 'Customs Reports',
//       // icon: 'Report',
//       children: [
//         {
//           name: 'DPS',
//           children: [{ name: 'Sigtas Report', path: '/report' }]
//         },
//         { name: 'Transit', children: [{ name: '4250- Transit', path: routes.transit_4250 }] },
//         { name: 'Revenue', children: [{ name: '4150- Revenue', path: routes.revenue4150 }] },
//         { name: 'Data Exchange', children: [{ name: '4150- Revenue', path: routes.revenue4150 }] },
//         { name: 'Selectivity', children: [{ name: 'Sigtas Report', path: '/report' }] },
//         { name: 'Manifest', children: [{ name: 'Sigtas Report', path: '/report' }] }
//       ],
//       isHidden: false
//     }
//   ];
//   const renderLevels = (data: Array<any>) => {
//     return data.map((item, index) => {
//       if (!item?.isHidden) {
//         if (item.type === 'label')
//           return (
//             <ListLabel key={index} mode={mode} className="sidenavHoverShow">
//               {item.label}
//             </ListLabel>
//           );

//         if (item.children) {
//           return (
//             <MatxVerticalNavExpansionPanel mode={mode} item={item} key={index}>
//               {renderLevels(item.children)}
//             </MatxVerticalNavExpansionPanel>
//           );
//         } else if (item.type === 'extLink') {
//           return (
//             <ExternalLink
//               key={index}
//               href={item.path}
//               className={`${mode === 'compact' && 'compactNavItem'}`}
//               rel="noopener noreferrer"
//               target="_blank"
//             >
//               <ButtonBase key={item.name} name="child" sx={{ width: '100%' }}>
//                 {(() => {
//                   if (item.icon) {
//                     return <Icon className="icon">{item.icon}</Icon>;
//                   } else {
//                     return <span className="item-icon icon-text">{item.iconText}</span>;
//                   }
//                 })()}
//                 <StyledText mode={mode} className="sidenavHoverShow">
//                   {item.name}
//                 </StyledText>
//                 <Box mx="auto"></Box>
//                 {item.badge && <BadgeValue>{item.badge.value}</BadgeValue>}
//               </ButtonBase>
//             </ExternalLink>
//           );
//         } else {
//           return (
//             <InternalLink key={index}>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? `navItemActive ${mode === 'compact' && 'compactNavItem'}`
//                     : `${mode === 'compact' && 'compactNavItem'}`
//                 }
//               >
//                 <ButtonBase key={item.name} name="child" sx={{ width: '100%' }}>
//                   {item?.icon ? (
//                     <Icon className="icon" sx={{ width: 36 }}>
//                       {item.icon}
//                     </Icon>
//                   ) : (
//                     <Fragment>
//                       <BulletIcon
//                         className={`nav-bullet`}
//                         sx={{ display: mode === 'compact' && 'none' } as any}
//                       />
//                       <Box
//                         className="nav-bullet-text"
//                         sx={
//                           {
//                             ml: '20px',
//                             fontSize: '11px',
//                             display: mode !== 'compact' && 'none'
//                           } as any
//                         }
//                       >
//                         {item.iconText}
//                       </Box>
//                     </Fragment>
//                   )}
//                   <StyledText mode={mode} className="sidenavHoverShow">
//                     {item.name}
//                   </StyledText>

//                   <Box mx="auto" />

//                   {item.badge && (
//                     <BadgeValue className="sidenavHoverShow">{item.badge.value}</BadgeValue>
//                   )}
//                 </ButtonBase>
//               </NavLink>
//             </InternalLink>
//           );
//         }
//       }
//     });
//   };

//   return <div className="navigation">{renderLevels(navigations)}</div>;
// };

// export default React.memo(MatxVerticalNav);

import classNames from 'classnames';
import './MegaMenu.css';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuthorities } from 'src/app/auth/private-routes';
import { routes } from 'src/app/navigations';
import { AUTHORITIES } from 'src/app/utils/constant';
import { useUser } from '../../contexts/JWTAuthContext';
const MatxVerticalNav = () => {
    const navigation = useNavigate();
    const { user } = useUser();
    const items: MenuItem[] = [
        {
            className: classNames({
                'text-white': true,
                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.DASHBOARD,
                    AUTHORITIES.ADMIN
                ])
            }),
            label: 'Dashboard',
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

            label: 'Settings',
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

            label: 'User Management',
            items: [
                {
                    label: 'Users Management',
                    items: [
                        {
                            className: classNames({
                                'text-white': true,
                                'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                    AUTHORITIES.USER_READ,
                                    AUTHORITIES.ADMIN
                                ])
                            }),

                            label: 'Users',
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

                            label: 'Roles',
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
                    AUTHORITIES.REPORT_SIGTAS,
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.REPORT_4150_REVENUE,
                    AUTHORITIES.REPORT_4250_TRANSIT,
                    AUTHORITIES.REPORT_4250_TRANSIT
                ])
            }),

            label: 'Customs Reports',
            // icon: 'Report',
            items: [
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN
                            ])
                        }),
                        template(item, options) {
                            console.log(item, options);
                            return <>123456</>;
                        },
                        disabled: true,
                        label: 'DPS',
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_SIGTAS
                                    ])
                                }),
                                label: 'Sigtas Report',
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
                                label: 'DPS Report 4550',
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
                                label: 'DPS Report 4551',
                                command: () => {
                                    navigation(routes.DPS_4551);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4552_DPS
                                    ])
                                }),
                                label: 'DPS Report 4552',
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
                                label: 'DPS Report 4553',
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
                                label: 'DPS Report 4554',
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
                                label: 'DPS Report 4555',
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
                                label: 'DPS Report 4556',
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
                                label: 'DPS Report 4557',
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
                                label: 'DPS Report 4558',
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
                                label: 'DPS Report 4559',
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
                                label: 'DPS Report 4560 ',
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
                                label: 'DPS Report 4561',
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
                                label: 'DPS Report 4562',
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
                                label: 'DPS Report 4563',
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
                                label: 'DPS Report 4564',
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
                                label: 'DPS Report 4565',
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
                                label: 'DPS Report 4566',
                                command: () => {
                                    navigation(routes.DPS_4566);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4570_DPS
                                    ])
                                }),
                                label: 'DPS Report 4570',
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
                                label: 'DPS Report 4571',
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
                                label: 'DPS Report 4572',
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
                                label: 'DPS Report 4573',
                                command: () => {
                                    navigation(routes.DPS_4573);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4575_DPS
                                    ])
                                }),
                                label: 'DPS Report 4575',
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
                                label: 'DPS Report 4576',
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
                                label: 'DPS Report 4578',
                                command: () => {
                                    navigation(routes.DPS_4578);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4579_DPS
                                    ])
                                }),
                                label: 'DPS Report 4579',
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
                                label: 'DPS Report 4580',
                                command: () => {
                                    navigation(routes.DPS_4580);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_4583_DPS
                                    ])
                                }),
                                label: 'DPS Report 4583',
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
                                label: 'DPS Report 4584',
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
                                label: 'DPS Report 4585',
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
                                label: 'DPS Report 4586',
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
                                label: 'DPS Report 4587',
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
                                label: 'DPS Report 4588',
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
                                label: 'DPS Report 4589',
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
                                label: 'DPS Report 4590',
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
                                label: 'DPS Report 4591',
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
                                label: 'DPS Report 4593',
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
                                label: 'DPS Report 4595',
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
                                label: 'DPS Report 4596',
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
                                label: 'DPS Report 4599',
                                command: () => {
                                    navigation(routes.DPS_4599);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_45101_DPS
                                    ])
                                }),
                                label: 'DPS Report 45101',
                                command: () => {
                                    navigation(routes.DPS_45101);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_45102_DPS
                                    ])
                                }),
                                label: 'DPS Report 45102',
                                command: () => {
                                    navigation(routes.DPS_45102);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ADMIN,
                                        AUTHORITIES.REPORT_45103_DPS
                                    ])
                                }),
                                label: 'DPS Report 45103',
                                command: () => {
                                    navigation(routes.DPS_45103);
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                AUTHORITIES.REPORT_4250_TRANSIT,
                                AUTHORITIES.ADMIN
                            ])
                        }),
                        label: 'Transit',
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4250_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Transit Report 4250',
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
                                label: 'Transit Report 4251',
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
                                label: 'Transit Report 4252',
                                command: () => {
                                    navigation(routes.Transit_4252);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4257_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Transit Report 4257',
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
                                label: 'Transit Report 4258',
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
                                label: 'Transit Report 4259',
                                command: () => {
                                    navigation(routes.Transit_4259);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4265_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Transit Report 4265',
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
                                label: 'Transit Report 4266',
                                command: () => {
                                    navigation(routes.Transit_4266);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4267_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Transit Report 4267',
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
                                label: 'Transit Report 4268',
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
                                label: 'Transit Report 4270',
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
                                label: 'Transit Report 4271',
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
                                label: 'Transit Report 4272',
                                command: () => {
                                    navigation(routes.Transit_4272);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4274_TRANSIT,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Transit Report 4274',
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
                                label: 'Transit Report 4275',
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
                                label: 'Transit Report 4276',
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
                                label: 'Transit Report 4277',
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
                                label: 'Transit Report 4278',
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
                                label: 'Transit Report 4279',
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
                                label: 'Transit Report 4280',
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
                                label: 'Transit Report 4281',
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
                                label: 'Transit Report 4282',
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
                                label: 'Transit Report 4283',
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
                                label: 'Transit Report 4284',
                                command: () => {
                                    navigation(routes.Transit_4284);
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                AUTHORITIES.REPORT_4150_REVENUE,
                                AUTHORITIES.ADMIN
                            ])
                        }),
                        label: 'Revenue',
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4150_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Revenue Report 4150',
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
                                label: 'Revenue Report 4151',
                                command: () => {
                                    navigation(routes.Revenue_4151);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4152_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: '4152- Revenue',
                                command: () => {
                                    navigation(routes.Revenue_4152);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4153_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: '4153- Revenue',
                                command: () => {
                                    navigation(routes.Revenue_4153);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4164_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: '4164- Revenue',
                                command: () => {
                                    navigation(routes.Revenue_4164);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4153_1400_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Revenue Report 4153_1400',
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
                                label: 'Revenue Report 4154',
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
                                label: 'Revenue Report 4155',
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
                                label: 'Revenue Report 4157_1400',
                                command: () => {
                                    navigation(routes.Revenue_4157_1400);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4169_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: '4169- Revenue',
                                command: () => {
                                    navigation(routes.Revenue_4169);
                                }
                            }, {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4170_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: '4170- Revenue',
                                command: () => {
                                    navigation(routes.Revenue_4170);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4158_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Revenue Report 4158',
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
                                label: 'Revenue Report 4159',
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
                                label: 'Revenue Report 4160',
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
                                label: 'RevenueReport4161',
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
                                label: 'Revenue Report 4162',
                                command: () => {
                                    navigation(routes.Revenue_4162);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4163_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Revenue Report 4163',
                                command: () => {
                                    navigation(routes.Revenue_4163);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4164_1400_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Revenue Report 4164_1400',
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
                                label: 'Revenue Report 4165',
                                command: () => {
                                    navigation(routes.Revenue_4165);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4171_1400_REVENUE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Revenue Report 4171_1400',
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
                                label: 'Revenue Report 4171',
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
                                label: 'Revenue Report 4172',
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
                                label: 'Revenue Report 4173',
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
                                label: 'Revenue Report 48100',
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
                                label: 'Revenue Report 48101',
                                command: () => {
                                    navigation(routes.Revenue_48100);
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN
                            ])
                        }),
                        label: 'Selectivity',
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4350_SELECTIVITY,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Selectivity Report 4350',
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
                                label: 'Selectivity Report 4351',
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
                                label: 'Selectivity Report 4352',
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
                                label: 'Selectivity Report 4353',
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
                                label: 'Selectivity Report 4354',
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
                                label: 'Selectivity Report 4355',
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
                                label: 'Selectivity Report 4356',
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
                                label: 'Selectivity Report 4360',
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
                                label: 'Selectivity Report 4361',
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
                            'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN
                            ])
                        }),
                        label: 'Manifest',
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ManifestReport4450,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'ManifestReport4450',
                                command: () => {
                                    navigation(routes.ManifestReport4450);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_5050_DATAEXCHANGE,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'DataExchange Report 5050',
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
                                label: 'DataExchange Report 5051',
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
                                label: 'DataExchange Report 5053',
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
                                label: 'DataExchange Report 5054',
                                command: () => {
                                    navigation(routes.DataExchange_5054);
                                }
                            }
                        ]
                    }
                ],
                [
                    {
                        className: classNames({
                            'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                AUTHORITIES.ADMIN
                            ])
                        }),
                        label: 'Valuation',
                        items: [
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.REPORT_4650_VALUATION,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'Valuation Report 4650',
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
                                label: 'Valuation Report 4652',
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
                                label: 'Valuation Report 4653',
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
                                label: 'Valuation Report 4654',
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
                                label: 'Valuation Report 4656',
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
                                label: 'Valuation Report 4657',
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
                                label: 'Valuation Report 4658',
                                command: () => {
                                    navigation(routes.Valuation_4658);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ExemptionReport4750,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'ExemptionReport4750',
                                command: () => {
                                    navigation(routes.ExemptionReport4750);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.ExemptionReport4752,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: 'ExemptionReport4752',
                                command: () => {
                                    navigation(routes.ExemptionReport4752);
                                }
                            },
                            {
                                className: classNames({
                                    'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                                        AUTHORITIES.Report_4753_Exemption,
                                        AUTHORITIES.ADMIN
                                    ])
                                }),
                                label: '4753- Exemption',
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
                                label: '4754- Exemption',
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
                                label: '4755- Exemption',
                                command: () => {
                                    navigation(routes.Exemption_4755);
                                }
                            }
                        ]
                    }
                ]
            ]
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
