import {Router} from 'express';
import ItemController from '../../controller/item-controller';


const router = Router();
const itemCtrl = new ItemController();

router.get('/', itemCtrl.getAll);

export default router;