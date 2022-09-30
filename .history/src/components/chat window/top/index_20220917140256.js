import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';

const Top = () => {
  const name = useCurrentRoom(v => v.name);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4>
          <Icon
            componentClass={Link}
            to="/"
            icon="arrow-circle-left"
            size="2x"
          />
          <span className="text-disappear">{name}</span>
        </h4>
      </div>
    </div>
  );
};

export default memo(Top);
