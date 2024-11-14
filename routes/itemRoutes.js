import express from 'express';
import { getItems, getItem, createItems, updateItem, deleteItems } from './path/to/module';

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);          
router.post('/', createItems);
router.put('/:id', updateItem);        
router.delete('/:id', deleteItems);    

export default router;
