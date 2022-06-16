import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

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
  <div>
    {data.map((d) => (
      <Card key={d.id}>
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
