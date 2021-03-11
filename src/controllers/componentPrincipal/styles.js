import { makeStyles } from '@material-ui/core/styles';

import { BREAK_SM } from '../../constants/commons/break-points'

const useStyles = makeStyles( () => ({
    movil: {
        [BREAK_SM]: {
            'display'       : 'none'
        }
    }
    
  }));

export default useStyles