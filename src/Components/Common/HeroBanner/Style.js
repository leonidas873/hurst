import { styled } from '@mui/system';
import { Breadcrumbs, Container } from '@mui/material'

export const MySection = styled('div')({
    position: 'relative',
    background: 'rgba(0,0,0,0) url(https://template.hasthemes.com/hurst-v1/hurst/img/bg/1.jpg) no-repeat scroll center center/cover',

    '&::before': {
        content: '""',
        background: 'rgba(0,0,0,.3) none repeat scroll 0 0',
        height: '100%',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '100%',
    }
})

export const MyContainer = styled(Container)({
    position: 'relative',

    '& h2': {
        position: 'relative',
        color: '#fff',
        fontSize: '45px',
        fontWeight: '900',
        lineHeight: '33px',
        marginBottom: '0',
        padding: '134px 0 101px',
        textAlign: 'center',
        textTransform: 'uppercase',
    },

    '@media screen and (max-width: 768px)': {
        'h2': {
            fontSize: '24px',
            lineHeight: '32px',
            padding: '42px 0 38px',
        }
    }
})

export const MyBreadcrumbs = styled(Breadcrumbs)({
    paddingBottom: '15px',
    color: 'white',

    '& a': {
        transition: 'all .3s ease 0s',
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: '700',
    },

    '& a:hover': {
        color: '#c87065',
    },

    '& p': {
        color: '#eee',
        fontSize: '14px',
        fontWeight: '700',
        textTransform: 'uppercase',
    }
})