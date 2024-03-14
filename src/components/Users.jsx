import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUserById, getUserById, getUsersList, updateUser ,updateUserDetail} from "../actions/users";
import './styles.css';

const Users = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.users.loading);
  const list = useSelector(state => state.users.list);

  const submitting = useSelector(state => state.users.submitting);
  const createdUser = useSelector(state => state.users.createdUser);

  const initialFormData = {
    name:'',
    job:''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputField = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch])

  function getUserData(userId){
    dispatch(getUserById(userId));
  }

  const handleDeleteUser = (e,userId) => {
    e.stopPropagation();
    dispatch(deleteUserById(userId));
  }

  const handleUpdateUserPUT = (e,user) => {
    e.stopPropagation();
    dispatch(updateUser({
      name: `${user.first_name} ${user.last_name}`,
      job: `Job for user with user-id ${user.id}`,
    },user.id));    
  }

  const handleUpdateUserPATCH = (e,user) => {
    e.stopPropagation();
    dispatch(updateUserDetail({
      name: `${user.first_name} ${user.last_name}`,
    },user.id));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createUser(formData));
    setFormData(initialFormData);
  }

  useEffect(()=>{
    console.log('Created User:', createdUser);
  },[createdUser])

  return (
    <div> 
      <form autoComplete="off">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputField} required />
        </div>
        <div className="form-group">
          <label className="form-label">Job:</label>
          <input type="text" name="job" value={formData.job} onChange={handleInputField} required />
        </div>
        <button type="submit" disabled={submitting} className="form-button"  onClick={handleSubmit}>Submit</button>
      </form>


      <h1>Users: </h1>

      {loading && <div>Loading ...</div>}
      {!loading && list && 
        <div>
          {list.map((user) => 
            <div key={user.id} className="row" onClick={()=> getUserData(user.id)}>
              <div className="cell" >
                <img className="avatar" src={user.avatar} />
              </div>
              <div className="cell">{user.first_name} {user.last_name}</div>
              <div className="cell">{user.email}</div>
              
              <button onClick={(e)=> handleDeleteUser(e,user.id)}> Delete </button>
              <button onClick={(e)=> handleUpdateUserPUT(e,user)}> Update(PUT) </button>
              <button onClick={(e)=> handleUpdateUserPATCH(e,user)}>Update(PATCH)</button>

            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Users;