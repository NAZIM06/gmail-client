/* eslint-disable react/jsx-key */
import { Button, Box, List, ListItem, styled} from '@mui/material';
import { CreateOutlined } from '@mui/icons-material';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';
import { useState } from 'react';

const ComposeButton = styled(Button)({
    background: '#c2e7ff',
    color: '#001d35',
    borderRadius: '16px',
    padding: '15px',
    minWidth: '140px',
    textTransform: 'none'
});

const Container = styled(Box)({
    padding:'8px',
    '& > ul' : {
        padding: '10px 0 0 5px',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer'
    },

       ' & > a' : {
            textDecoration: 'none',
            color: 'inherit'
        },

        '& > ul > li > svg' : {
            marginRight: 20
        }
})   

const SideBarContent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
     
    const onComposeClick = () => {
        setOpenDrawer(true);
    }


    return (
        <Container>
            <ComposeButton onClick={() => onComposeClick()}>
                <CreateOutlined/>Compose
            </ComposeButton>
            <List>
                {
                    SIDEBAR_DATA.map((data, index) => (
                        <ListItem key={index}>
                            <data.icon fontSize='small'/>{data.title}
                        </ListItem>
                    ))
                }
            </List>
            <ComposeMail open={openDrawer} setOpenDrawer={setOpenDrawer}/>
        </Container>

    );
};

export default SideBarContent;