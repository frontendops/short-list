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
      <div key={d.id}>{d.title}</div>
    ))}
  </div>
);

export default CardList;
