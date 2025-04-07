import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Hidden,
  Icon,
  IconButton,
  MenuItem,
  useMediaQuery,
  Box,
  styled,
  useTheme
} from '@mui/material';

import { MatxMenu, MatxSearchBox } from '../../../components';
import { themeShadows } from '../../../components/MatxTheme/themeColors';
import { useUser } from '../../../contexts/JWTAuthContext';
import { topBarHeight } from '../../../utils/constant';

import { Span } from '../../Typography';
import NotificationBar from '../../NotificationBar/NotificationBar';
import ShoppingCart from '../../ShoppingCart';
import { useSettingsStore } from '../../../contexts/SettingsContext';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'primereact/dropdown';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary
}));

const TopbarRoot = styled('div')({
  top: 0,
  zIndex: 96,
  height: topBarHeight,
  boxShadow: themeShadows[8],
  transition: 'all 0.3s ease'
});

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 16,
    paddingRight: 16
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 14,
    paddingRight: 16
  }
}));

const UserMenu = styled(Box)({
  padding: 4,
  display: 'flex',
  borderRadius: 24,
  cursor: 'pointer',
  alignItems: 'center',
  '& span': { margin: '0 8px' }
});

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  '& span': { marginRight: '10px', color: theme.palette.text.primary }
}));

const IconBox = styled('div')(({ theme }) => ({
  display: 'inherit',
  [theme.breakpoints.down('md')]: { display: 'none !important' }
}));

const Layout1Topbar = (props: { fixed?: boolean; className?: string }) => {
  const theme = useTheme();
  const { settings, updateSettings } = useSettingsStore();
  const { logout, user } = useUser((state) => state);
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [language, setLanguage] = useState('en')
  const { i18n, t } = useTranslation();

  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value)

    const date = new Date();
    date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();

    document.cookie = `lang=${e.target.value} ${expires}; path=/`
  }

  useEffect(() => {
    const lang = document.cookie.split('lang')[1].slice(1, 3)
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }, [])

  const updateSidebarMode = (sidebarSettings: any) => {
    updateSettings({ layout1Settings: { leftSidebar: { ...sidebarSettings } } });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
    } else {
      mode = layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full';
    }
    updateSidebarMode({ mode });
  };

  return (
    <TopbarRoot>
      <TopbarContainer>
        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Icon>menu</Icon>
          </StyledIconButton>

          <IconBox>
            <StyledIconButton>
              <Icon>mail_outline</Icon>
            </StyledIconButton>

            <StyledIconButton>
              <Icon>web_asset</Icon>
            </StyledIconButton>

            <StyledIconButton>
              <Icon>star_outline</Icon>
            </StyledIconButton>
          </IconBox>
        </Box>

        <Box display="flex" alignItems="center">
          <select
            style={{ padding: '2px 5px', margin: '2px 10px', color: '#333', borderColor: '#333', outlineColor: '#777' }}
            name="lang" id="lang" value={language} onChange={(e) => changeLanguage(e)}>
            <option value="en">English</option>
            <option value="fa">Farsi</option>
            <option value="ps">Pashto</option>
          </select>
          <MatxSearchBox />
          {/* 
          <NotificationBar container={{}} />

          <ShoppingCart container={{}} /> */}

          <MatxMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span>
                    {t('home')}
                    Hi <strong>{user.name}</strong>
                  </Span>
                </Hidden>
                <Avatar src={user.avatar} sx={{ cursor: 'pointer' }} />
              </UserMenu>
            }
          >
            <StyledItem>
              <Link to="/">
                <Icon> home </Icon>
                <Span> Home </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Link to="/page-layouts/user-profile">
                <Icon> person </Icon>
                <Span> Profile </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Icon> settings </Icon>
              <Span> Settings </Span>
            </StyledItem>

            <StyledItem onClick={logout}>
              <Icon> power_settings_new </Icon>
              <Span> Logout </Span>
            </StyledItem>
          </MatxMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default memo(Layout1Topbar);
