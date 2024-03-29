import './CardListStyle.css';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

// create shared interface
interface CardData {
  category?: string;
  date?: Date; // completion date,
  daysUntil?: number;
  description?: string;
  id: string;
  imgUrl?: string;
  title: string;
}

interface Props {
  data: CardData[];
  onEdit: Function;
}

const CardList: React.FC<Props> = ({ data, onEdit }) => (
  <div className="card-list-container">
    {data.map((d) => (
      <Card
        key={d.id}
        sx={{
          minWidth: 250,
        }}
      >
        <CardMedia
          component="img"
          src={d.imgUrl || ''}
          height="150"
          width="100%"
          alt="Image describing media"
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {d.category}
          </Typography>
          <Typography variant="h5" component="div">
            {d.title}
          </Typography>

          <Typography variant="body2">{d.description}</Typography>
          {/* @ts-ignore */}
          <Button onClick={onEdit}>Edit</Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default CardList;
