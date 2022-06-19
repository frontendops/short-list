import './CardListStyle.css';
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

// create shared interface
interface CardData {
  id: string;
  date?: Date; // completion date,
  title: string;
  description?: string;
  category?: string;
  daysUntil?: number;
}

interface Props {
  data: CardData[];
}

const CardList: React.FC<Props> = ({ data }) => (
  <div className="card-list-container">
    {data.map((d) => (
      <Card key={d.id} sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {d.category}
          </Typography>
          <Typography variant="h5" component="div">
            {d.title}
          </Typography>
          <Typography variant="body2">{d.description}</Typography>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default CardList;
