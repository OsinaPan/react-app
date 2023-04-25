import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addList } from '../redux/listsRedux';

const ListForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return(
      <form className={styles.listForm} onSubmit={handleSubmit}  >
        <span>Title:</span> <TextInput type='text' value={title} onChange={e => setTitle(e.target.value)} />
        <span>Description:</span> <TextInput type='text' value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add list</Button>
        </form>

  );
};

export default ListForm;