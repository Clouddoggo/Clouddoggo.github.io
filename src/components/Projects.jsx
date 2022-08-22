import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import {
  IconButton, Card, CardMedia, CardContent, CardActionArea, CardActions, Container,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Kiru from '../assets/kiru.png';
import Nuseats from '../assets/nuseats.png';
import Chairvise from '../assets/chairvise.png';

const data = [
  {
    key: 1,
    title: 'Flutter Alarm',
    githubUrl: 'https://github.com/Clouddoggo/flutter-alarm',
    imgSrc: Nuseats,
  },
  {
    key: 2,
    title: 'Kiru',
    designUrl: 'https://www.figma.com/proto/gU7A6iS11eRLkl0k86Q8aH/Kiru?node-id=109%3A60&scaling=scale-down&page-id=0%3A1&starting-point-node-id=109%3A60',
    imgSrc: Kiru,
  },
  {
    key: 3,
    title: 'NUSeats',
    designUrl: 'https://www.figma.com/proto/9zdpc6gjscHbdtSgBOtoiw/NUSeats-Final-Prototype?node-id=43%3A1278&scaling=scale-down&page-id=0%3A1&starting-point-node-id=43%3A1278',
    imgSrc: Nuseats,
  },
  {
    key: 4,
    title: 'ChairVisE',
    githubUrl: 'https://github.com/Clouddoggo/duke',
    imgSrc: Chairvise,
  },
  {
    key: 5,
    title: 'JelphaBot',
    githubUrl: 'https://github.com/Clouddoggo/Jelphabot',
    imgSrc: Nuseats,
  },
];

const ProjectCard = (props) => {
  const {
    title, githubUrl, designUrl, imgSrc,
  } = props;

  return (
    <Card sx={{ maxWidth: 360 }} raised>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imgSrc}
          alt="project sketch"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {githubUrl && (
        <IconButton aria-label="github" href={githubUrl} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
        )}
        {designUrl && (
        <IconButton aria-label="design" href={designUrl} target="_blank" rel="noopener noreferrer">
          <DesignServicesOutlinedIcon />
        </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

ProjectCard.defaultProps = {
  githubUrl: '',
  designUrl: '',
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  designUrl: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
};

const Projects = () => (
  <Container maxWidth="lg" style={{ margin: 'auto', paddingTop: '3%' }}>
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {data.map((item) => (
        <Grid key={item.key}>
          <ProjectCard
            title={item.title}
            githubUrl={item.githubUrl}
            designUrl={item.designUrl}
            imgSrc={item.imgSrc}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
