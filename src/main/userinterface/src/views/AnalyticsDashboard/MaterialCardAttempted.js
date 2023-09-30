import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function MaterialCardAttempted() {
  return (
    <Card sx={{ minWidth: 270 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Total Questions Attempted
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          At least Once
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 50 }}>
          230
        </Typography>
      </CardContent>
    </Card>
  );
}
