import { makeStyles } from '@material-ui/core/styles';

import { BREAK_MAX_MD, BREAK_MIN_LG, BREAK_MIN_MD } from '../../constants/commons/break-points'

const useStyles = makeStyles( () => ({
    movil: {
        [BREAK_MAX_MD]: {
            'display'       : 'none'
        }
    },

    tabletDeskton : {
        [BREAK_MIN_LG]: {
            'display'       : 'none'
        },
        [BREAK_MIN_MD]: {
            'display'       : 'none'
        }
    }
  }));

export default useStyles
