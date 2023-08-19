import classes from './NewPost.module.css';
import {useState} from 'react';

function NewPost({onCancel, onAddPost}) { // object destructuring of props
  const [enteredBody, setEnteredBody] = useState(''); 
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
      setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel(); 
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}> 
    {/* onSUbmit = event listener */}
      <p>
        <label htmlFor="body">Text</label> 
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} /> 
      </p>
      <p>
        <label htmlFor="name">Your name</label> 
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className = {classes.actions}>
      <button type="button" onClick={onCancel}>Cancel</button>
      <button>Submit</button></p> {/* no need to add type="submit" as that's the default anyways */} 
    </form>
  );
}

export default NewPost;