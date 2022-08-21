import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';

const Footer = () => {
  const now = new Date();
  return (
    <Stack
      justifyContent="center"
      divider={<Divider variant="middle" />}
      spacing={1.5}
    >
      <Stack
        spacing={1.5}
        direction="row"
        justifyContent="center"
      >
        <IconButton aria-label="github" href="https://github.com/Clouddoggo/" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/jel-lim-04ab7b20a/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="email">
          <EmailIcon />
        </IconButton>
      </Stack>
      <Typography variant="body1" gutterBottom>
        <i>
          Last updated:
          {' '}
          {new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(now)}
        </i>
      </Typography>
    </Stack>

  );
};
export default Footer;
