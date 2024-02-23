import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showStatus } from '../../redux/categories/categories';

const MainCategory = () => {
  const dispach = useDispatch();
  const status = useSelector((state) => state.status);

  const onclickStatus = (e) => {
    e.preventDefault();
    dispach(showStatus());
  };

  return (
    <div>
      <button type="button" onClick={onclickStatus}>{status.state}</button>
    </div>
  );
};

export default MainCategory;
