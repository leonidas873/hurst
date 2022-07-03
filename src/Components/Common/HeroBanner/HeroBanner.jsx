import React from 'react'
import { MyContainer, MySection, MyBreadcrumbs } from './Style'

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const HeroBanner = ({ text, breadcrumbs }) => {
    return (
        <MySection>
            <MyContainer maxWidth="lg">
                <h2>{text}</h2>
                <MyBreadcrumbs aria-label="breadcrumb">
                    {breadcrumbs.links.map((item) =>
                        <Link href={item.href}>
                            {item.text}
                        </Link>
                    )}
                    <Typography color="text.primary">{breadcrumbs.current}</Typography>
                </MyBreadcrumbs>
            </MyContainer>
        </MySection>
    )
}

export default HeroBanner