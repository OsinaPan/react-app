import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../redux/columnsRedux';

const ColumnForm = ({listId}) => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState(''); 

  const handleSubmit = (e) => {
    
    e.preventDefault();
    //props.action({ title: title, icon: icon }); 
    dispatch (addColumn({title, icon, listId}))
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