import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './footer.css';

const Footer =styled('div')(({ theme }) => ({
    backgroundColor: '#282828',
    color: '#8f8f8f',
    marginTop: '2%',
    marginBottom: '2%',
}));

const FooterTitle =styled('div')(({ theme }) => ({
    color: 'white',
    fontSize: '18px',
    fontWeight: '700',
    marginTop: '4%'
}));

const TextContact =styled('div')(({ theme }) => ({
    color: '#f51167',
    marginRight: '15px',
    lineHeight: '53px',
    marginLeft: '10%',
}));

const TitleLeft = styled('div')(({ theme }) => ({
    width: '45%',
    [theme.breakpoints.up('xs')] : {
        width: '100%'
    },
}));

const Blog = styled('div')(({ theme }) => ({
    width: '50%',
}));

const AboutImg = styled('div')(({ theme }) => ({
    width: '100%',
    marginTop: '5%',
}));

const StyleUserLink = styled('div')(({ theme }) => ({
    marginTop : '10%',
    '&:hover' : {
        color: '#fff',
        cursor : 'pointer',
    },
}));

const BlogImg = styled('div')(({ theme }) => ({
    width: '64px',
    height: '64px',
    marginTop: '8%',
}));

const BlogTitle = styled('div')(({ theme }) => ({
    color: '#fff',
    fontSize: '18px',
}));

const BlogRight = styled('div')(({ theme }) => ({
    marginTop: '7%',
    marginLeft:'5%',
}));

const BlogYear = styled('div')(({ theme }) => ({
    fontSize: '12px'
}));

const BlogReadmore = styled('div')(({theme}) => ({
    color:'#f51167',
    fontSize: '12px',
}));


export default function ResponsiveStack() {
    return (
        <Footer>
            <Container>
                <Stack
                    direction={{xs:'column', sm: 'column', md: 'row', }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    sx={{ display: {xs: 'flex', md: 'flex', justifyContent: 'space-around'}}}
                >
                    <TitleLeft>
                        <Stack
                            direction={{md:"row"}}
                            spacing={{xs:1, sm: 2, md: 3 }}
                            sx={{ display: {sm: 'flex', md: 'flex', justifyContent: 'space-around'}}}
                        >
                            <Blog>
                                <FooterTitle>
                                    ABOUT
                                </FooterTitle>
                                <Typography
                                    sx={{display:{textAlign: 'justify', marginTop: '5%'}}}
                                >
                                    Online & physical bead shop with the best beads and beading supplies in Zimbabwe ✓ Over 9000 beads for jewelry making ✓ Glass beads ✓ Beading supplies and much more!
                                </Typography>

                                <AboutImg>
                                    <img src='/assets/img/card-about-footer.png' alt="card" width="95%" />
                                </AboutImg>
                            </Blog>
                            <Blog>
                                <FooterTitle
                                    sx={{marginLeft: '10%'}}
                                >
                                    USEFUL LINKS
                                </FooterTitle>
                                <Stack
                                    direction={{ md:'row', justifyContent:'space-around' }}
                                >
                                    <Box
                                        sx={{display:{width:'45%', marginLeft: '10%'}}}
                                    >

                                        <StyleUserLink href="#">
                                            <FiberManualRecordIcon
                                                sx={{display:{fontSize:'10px', color:'#ec150a', marginRight:'5px' }}}
                                            />
                                            About us
                                        </StyleUserLink>

                                        <StyleUserLink href="#">
                                            <FiberManualRecordIcon
                                                sx={{display:{fontSize:'10px', color:'#ec150a', marginRight:'5px' }}}
                                            />
                                            About us
                                        </StyleUserLink>

                                        <StyleUserLink href="#">
                                            <FiberManualRecordIcon
                                                sx={{display:{fontSize:'10px', color:'#ec150a', marginRight:'5px' }}}
                                            />
                                            About us
                                        </StyleUserLink>

                                        <StyleUserLink href="#">
                                            <FiberManualRecordIcon
                                                sx={{display:{fontSize:'10px', color:'#ec150a', marginRight:'5px' }}}
                                            />
                                            About us
                                        </StyleUserLink>
                                    </Box>
                                    <Box
                                        sx={{display:{width:'45%'}}}
                                    >
                                        <StyleUserLink href="#">
                                            <FiberManualRecordIcon
                                                sx={{display:{fontSize:'10px', color:'#ec150a', marginRight:'5px' }}}
                                            />
                                            About us
                                        </StyleUserLink>

                                        <StyleUserLink href="#">
                                            <FiberManualRecordIcon
                                                sx={{display:{fontSize:'10px', color:'#ec150a', marginRight:'5px' }}}
                                            />
                                            About us
                                        </StyleUserLink>

                                        <StyleUserLink href="#">
                                            <FiberManualRecordIcon
                                                sx={{display:{fontSize:'10px', color:'#ec150a', marginRight:'5px' }}}
                                            />
                                            About us
                                        </StyleUserLink>

                                        <StyleUserLink href="#">
                                            <FiberManualRecordIcon
                                                sx={{display:{fontSize:'10px', color:'#ec150a', marginRight:'5px' }}}
                                            />
                                            About us
                                        </StyleUserLink>
                                    </Box>
                                </Stack>
                            </Blog>
                        </Stack>
                    </TitleLeft>

                    <TitleLeft>
                        <Stack
                            direction={{md:"row"}}
                            spacing={{xs:1}}
                            sx={{ display: {sm: 'flex', md: 'flex', justifyContent: 'space-around'}}}
                        >
                            <Blog>
                                <FooterTitle>Blog</FooterTitle>

                                <Box
                                    sx={{display:{md:'flex', sm:'flex', xs:'flex'}}}
                                >
                                    <BlogImg>
                                        <img src="/assets/img/blog-footer.jpg" alt='blog' width='100%' height='100%' />
                                    </BlogImg>

                                    <BlogRight>
                                        <BlogTitle>BOHE MIAN WEDDING THEME</BlogTitle>
                                        <BlogYear>1 year ago</BlogYear>
                                        <BlogReadmore href="#">Read more</BlogReadmore>
                                    </BlogRight>
                                </Box>

                                <Box
                                    sx={{display:{md:'flex', sm:'flex', xs:'flex'}}}
                                >
                                    <BlogImg>
                                        <img src="/assets/img/blog-footer2.jpg" alt='blog' width='100%' height='100%' />
                                    </BlogImg>

                                    <BlogRight>
                                        <BlogTitle>BOHE MIAN WEDDING THEME</BlogTitle>
                                        <BlogYear>1 year ago</BlogYear>
                                        <BlogReadmore href="#">Read more</BlogReadmore>
                                    </BlogRight>
                                </Box>
                            </Blog>
                            <Blog
                                className='contact'
                            >
                                <FooterTitle
                                    sx={{marginLeft:'10%'}}
                                >
                                    Contact
                                </FooterTitle>

                                <Stack
                                    direction={{md:'row'}}
                                >
                                    <TextContact>C.</TextContact>
                                    <p>RVM SeaMaf</p>
                                </Stack>
                                <Stack
                                    direction={{md:'row'}}
                                >
                                    <TextContact>B.</TextContact>
                                    <p>108 Chinhoyi Street, Central Business District, Harare Zimbabwe</p>
                                </Stack>
                                <Stack
                                    direction={{md:'row'}}
                                >
                                    <TextContact>T.</TextContact>
                                    <p>+263782149840</p>
                                </Stack>
                                <Stack
                                    direction={{md:'row'}}
                                >
                                    <TextContact>E.</TextContact>
                                    <p>rvmseamaf@gmail.com</p>
                                </Stack>
                            </Blog>
                        </Stack>
                    </TitleLeft>
                </Stack>
            </Container>
        </Footer>
    );
}