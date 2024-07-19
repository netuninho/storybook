import React from "react";

interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children: React.ReactNode;
}

export default function Title( {tag, children}: TitleProps ) {
  const Tag = tag || 'h1';
  
  return (
    <Tag>
      {children}
    </Tag>
  )
}

Title.defaultProps = {
  tag: 'h1',
};
