import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserById, getUserById, getUsersList } from "../actions/users";
import './styles.css';

const Users = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.users.loading);
  const list = useSelector(state => state.users.list);

  const userDetails = useSelector(state => state.users.userDetails);

  useEffect(() => {
    dispatch(getUsersList())
  }, [dispatch])

  function getUserData(userId){
    dispatch(getUserById(userId))
  }

  const handleDeleteUser = (userId) => {
    dispatch(deleteUserById(userId));
  }

  // console.log('userDetails: ',userDetails);

  return <div>
    <h1>Users</h1>
    {loading && <div>Loading ...</div>}
    {!loading && list && <div>
        {list.map((item, i) => <div key={i} className="row" onClick={()=> getUserData(item.id)}>
          <div className="cell" >
            <img className="avatar" src={item.avatar} />
          </div>
          <div className="cell">{item.first_name} {item.last_name}</div>
          <div className="cell">{item.email}</div>
          <button onClick={()=>handleDeleteUser(item.id)}>Delete</button>
        </div>)}
      </div>}
  </div>
}

export default Users;