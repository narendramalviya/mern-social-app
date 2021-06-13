import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import Modal from '@material-ui/core/Modal';
export default function PostList (props) {

  const [open, setOpen] = useState(false);
  const [likeUsers, setLikeUsers] = useState([]);

  const openLikesModal =(likeUsers)=>{
    console.log('open modal ',likeUsers);
    setLikeUsers(likeUsers);
    handleOpen();
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <div style={{marginTop: '24px'}}>
        {props.posts.map((item, i) => {
            return <Post post={item} key={i} onRemove={props.removeUpdate} openLikesList={openLikesModal}/>
          })
        }

<div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {likeUsers.map(user=> <p>{user.name}</p>)}
      </Modal> */}
    </div>
      </div>
    )
}
PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  removeUpdate: PropTypes.func.isRequired
}
