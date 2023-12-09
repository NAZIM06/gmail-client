import { AppBar, Toolbar, Box, InputBase, styled } from '@mui/material';
import {Menu as MenuIcon, Tune, Search, HelpOutlineOutlined, SettingsOutlined, 
    AppsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import { gmailLogo } from '../constants/Constant';

const StyledAppBar = styled(AppBar)({
    background: '#f5f5f5',
    boxShadow: 'none'
})

const SearchWrapper = styled(Box)({
    background: '#EAF1FB',
    marginLeft: 80,
    borderRadius: '8px',
    minWidth: '690px',
    maxWidth: '720px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    '& > div': {
        width: '100%'
    }
})
const OptionsWrapper = styled(Box)({

    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    '& > svg': {
        marginLeft: 20
    }
})


const Header = ({ toggleDrawer }) => {
    return (
       <StyledAppBar position="static">
        <Toolbar>
            <MenuIcon color="action" onClick={toggleDrawer} ></MenuIcon>
            <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
            <SearchWrapper>
                    <Search color="action" />
                    <InputBase />
                    <Tune  color="action"/>
                </SearchWrapper>
                <OptionsWrapper>
                    <HelpOutlineOutlined color="action" />
                    <SettingsOutlined color="action" />
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" />
               </OptionsWrapper>
        </Toolbar>
       </StyledAppBar>
    );
};

export default Header;