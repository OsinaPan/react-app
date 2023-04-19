import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState(''); 

  const handleSubmit = (e) => {
    
    e.preventDefault();
    //props.action({ title: title, icon: icon }); 
    dispatch ({ type: 'ADD_COLUMN', payload: { title, icon } })
    setTitle(''); 
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
        <span>Title:</span> <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.inputStyle} />
        <span className={styles.inputText}>Icon: </span><input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} className={styles.inputStyle} />
        <Button>ADD COLUMN</Button>
    </form>
  );
};

export default ColumnForm;