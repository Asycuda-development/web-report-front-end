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

import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/navigations';
import classNames from 'classnames';
import { checkAuthorities } from 'src/app/auth/private-routes';
import { useUser } from '../../contexts/JWTAuthContext';
import { AUTHORITIES } from 'src/app/utils/constant';
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
              'tabbar-item-hidden': checkAuthorities(user.authorities, [AUTHORITIES.ADMIN])
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
                    AUTHORITIES.Report_4551_DPS
                  ])
                }),
                label: 'DPS Report 4551',
                command: () => {
                  navigation(routes.DPS_4551);
                }
              },

              {
                className: classNames({
                  'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.Report_4557_DPS
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
                    AUTHORITIES.Report_4553_DPS
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
                    AUTHORITIES.Report_4575_DPS
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
                    AUTHORITIES.Report_4580_DPS
                  ])
                }),
                label: 'DPS Report 4580',
                command: () => {
                  navigation(routes.DPS_4580);
                }
              },
              {
                className: classNames({
                  'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.Report_4572_DPS
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
                    AUTHORITIES.Report_4573_DPS
                  ])
                }),
                label: 'DPS Report 4573',
                command: () => {
                  navigation(routes.DPS_4573);
                }
              },

              // {
              //   className: classNames({
              //     'tabbar-item-hidden': !checkAuthorities(user.authorities, [
              //       AUTHORITIES.ADMIN,
              //       AUTHORITIES.Report_4587_DPS
              //     ])
              //   }),
              //   label: 'DPS Report 4587',
              //   command: () => {
              //     navigation(routes.DPS_4587);
              //   }
              // }
              // {
              //   className: classNames({
              //     'tabbar-item-hidden': !checkAuthorities(user.authorities, [
              //       AUTHORITIES.ADMIN,
              //       AUTHORITIES.Report_4588_DPS
              //     ])
              //   }),
              //   label: 'DPS Report 4588',
              //   command: () => {
              //     navigation(routes.DPS_4588);
              //   }
              // }
              // ,
              {
                className: classNames({
                  'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.ADMIN,
                    AUTHORITIES.Report_4589_DPS
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
                    AUTHORITIES.Report_4593_DPS
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
                    AUTHORITIES.Report_4595_DPS
                  ])
                }),
                label: 'DPS Report 4595',
                command: () => {
                  navigation(routes.DPS_4595);
                }
              }
              // {
              //   className: classNames({
              //     'tabbar-item-hidden': !checkAuthorities(user.authorities, [
              //       AUTHORITIES.ADMIN,
              //       AUTHORITIES.Report_4596_DPS
              //     ])
              //   }),
              //   label: 'DPS Report 4596',
              //   command: () => {
              //     navigation(routes.DPS_4596);
              //   }
              // }
              // {
              //   className: classNames({
              //     'tabbar-item-hidden': !checkAuthorities(user.authorities, [
              //       AUTHORITIES.ADMIN,
              //       AUTHORITIES.Report_4599_DPS
              //     ])
              //   }),
              //   label: 'DPS Report 4599',
              //   command: () => {
              //     navigation(routes.DPS_4599);
              //   }
              // }
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
                label: '4250- Transit',
                command: () => {
                  navigation(routes.transit_4250);
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
                label: '4150- Revenue',
                command: () => {
                  navigation(routes.revenue4150);
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
            label: 'Data Exchange',
            items: [
              {
                className: classNames({
                  'tabbar-item-hidden': !checkAuthorities(user.authorities, [
                    AUTHORITIES.REPORT_4150_REVENUE,
                    AUTHORITIES.ADMIN
                  ])
                }),
                label: '4150- Revenue',
                command: () => {
                  navigation('/dashboard');
                }
              }
            ]
          }
        ],
        [
          {
            className: classNames({
              'tabbar-item-hidden': !checkAuthorities(user.authorities, [AUTHORITIES.ADMIN])
            }),
            label: 'Selectivity',
            items: [
              {
                className: classNames({
                  'tabbar-item-hidden': !checkAuthorities(user.authorities, [AUTHORITIES.ADMIN])
                }),
                label: 'Sigtas Report',
                command: () => {
                  navigation('/dashboard');
                }
              }
            ]
          }
        ],
        [
          {
            className: classNames({
              'tabbar-item-hidden': !checkAuthorities(user.authorities, [AUTHORITIES.ADMIN])
            }),
            label: 'Manifest',
            items: [
              {
                className: classNames({
                  'tabbar-item-hidden': !checkAuthorities(user.authorities, [AUTHORITIES.ADMIN])
                }),
                label: 'Sigtas Report',
                command: () => {
                  navigation('/dashboard');
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
      breakpoint={'960px'}
    />
  );
};

export default React.memo(MatxVerticalNav);
