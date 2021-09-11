import React, { FC, forwardRef, ReactElement, Ref } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface iDialogLogOutProps {
  isActive: boolean,
  toggleModalLogOut: () => void
  onLogoutHandler: () => void
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children?: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export const DialogLogOut: FC<iDialogLogOutProps> = (
  { isActive, toggleModalLogOut, onLogoutHandler }: iDialogLogOutProps
) => {

  return (
    <div>
      <Dialog
        open={isActive}
        TransitionComponent={Transition}
        keepMounted
        onClose={toggleModalLogOut}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="responsive-dialog-title">
          Вы действительно хотите выйти из системы?
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={toggleModalLogOut}>
            Нет
          </Button>
          <Button onClick={onLogoutHandler} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


