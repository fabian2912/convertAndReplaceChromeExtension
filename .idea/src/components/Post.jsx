import classes from './Post.module.css'; // different import syntax
// import Post from './components/Post';

function Post(props) {   
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.body}>{props.body}</p>
    </li>
  );
}

export default Post; // so that it can be used in other code files as well
