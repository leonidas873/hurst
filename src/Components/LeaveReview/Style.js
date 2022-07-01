import { styled } from "@mui/system";
import { Rating } from "@mui/material";

export const Title = styled('h3')({
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '28px',
    marginBottom: '30px',
    color: '#434343',
    fontFamily: 'Lato,sans-serif',
    textTransform: 'uppercase',
    paddingBottom: '10px',
    position: 'relative',

    '&::before': {
        background: '#eee',
        bottom: '0',
        content: '""',
        height: '3px',
        left: '0',
        position: 'absolute',
        width: '50px',
    },
})

export const MyRating = styled(Rating)({
    display: 'flex',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '1.2rem',
    margin: '5px 0',

    '& span': {
        color: '#c87065',
    }
})

export const RatingContainer = styled('div')({
    display: 'flex',
})