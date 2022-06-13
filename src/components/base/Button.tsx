import React from 'react';

interface Props {
  text: string;
  color: string;
}

const Button: React.FC<Props> = ({ text, color }) => (
  <div style={{ color }}>
    <button type="submit">{text}</button>
  </div>
);

export default Button;
