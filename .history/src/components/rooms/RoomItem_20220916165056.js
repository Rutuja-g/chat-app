import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItem = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-content">
        <h3 className="text-disappear">Room name</h3>
        <TimeAgo datetime={'2016-08-08 08:08:08'} locale="zh_CN" />
      </div>

      <div className="d-flex align-items-center text-black-70">
        <span>No messages yet..</span>
      </div>
    </div>
  );
};

export default RoomItem;
