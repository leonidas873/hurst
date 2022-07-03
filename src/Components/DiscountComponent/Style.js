import { styled } from "@mui/system";

export const ContentContainer = styled('div')({
    backgroundColor: '#fff',
    padding: '72px 20px',
})

export const FlexContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',

    '&>div': {
        margin: '0 10px',
    },

    '& > a': {
        flex: 5,
        margin: '0 10px',
    },

    '& > a img': {
        width: '100%',
    },

    '@media screen and (max-width: 600px)': {
        flexDirection: 'column'
    }
})

export const Details = styled('div')({
    flex: 7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '45px',

    '& h1': {
        fontSize: '45px',
        fontWeight: '900',
        lineHeight: '35px',
        marginBottom: '15px',
        color: '#c87065',
    },

    '& p': {
        margin: '0 0 15px 0',
    },

    '& a': {
        color: '#c87065',
        fontWeight: '700',
        transition: 'all .3s ease 0s',
        textTransform: 'uppercase',
        textDecoration: 'none',
    },

    '& a svg': {
        transition: 'all .3s ease 0s',
        verticalAlign: 'middle',
    },

    '& a:hover': {
        color: '#c8a165',
        outline: '0 none',
    },

    '& a:hover svg': {
        color: '#c8a165',
    },

    '@media screen and (max-width: 768px)': {
        '& h1': {
            fontSize: '30px'
        }
    }

})

export const UpCommingDetails = styled('div')({
    padding: '20px 0 25px',
    textAlign: 'center',

    '& a': {
        transition: 'all .3s ease 0s',
        fontSize: '16px',
        lineHeight: '18px',
        textTransform: 'uppercase',
        fontFamily: 'bree serif',
        marginBottom: '5px',
        color: '#434343',
        textDecoration: 'none',
    },

    '& a:hover': {
        color: '#c8a165',
        outline: '0 none',
    },

    '& h4': {
        transition: 'all .3s ease 0s',
        fontSize: '16px',
        lineHeight: '18px',
        fontWeight: 500,
        textTransform: 'uppercase',
        fontFamily: 'bree serif',
        marginBottom: '5px',
        color: '#434343',
        textDecoration: 'none',
    },
})

export const CountDown = styled('div')({
    textAlign: 'center',

    '& div': {
        display: 'inline-block',
        margin: 'auto 15px',
    },

    '& div p': {
        color: '#8a8888',
        fontSize: '13px',
        fontWeight: '400',
        lineHeight: '18px',
        margin: '10px 0 0',
        textTransform: 'capitalize',
    },

    '& div span': {
        border: '1px solid #dfaba4',
        borderRadius: '50%',
        color: '#999',
        display: 'inline-block',
        fontSize: '20px',
        fontWeight: 700,
        height: '40px',
        lineHeight: '40px',
        width: '40px',
    },
})