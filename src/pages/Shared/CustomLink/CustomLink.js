import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={{ borderBottom: match ? '2px solid #ed4344' : '' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;