import React, { useContext } from 'react';
import CreateUser from './CreateUser';
import ListUser from './ListUser';
import AdminContext from '../../context/admin/AdminContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AlertContext from '../../context/alerts/AlertContext';

const UserMain = () => {
    const adminContext = useContext(AdminContext);
    const { msgerror, msgsuccess } = adminContext;

    const alertContext = useContext(AlertContext);
    const { validation } = alertContext;

    return (
        <>
            <div className='user-main'>
                <CreateUser />
                <ListUser />
            </div>
            <TransitionGroup>
                {validation ? (
                    <CSSTransition
                        in={validation}
                        timeout={200}
                        classNames='show'
                    >
                        <h1 className='form-error'>
                            Debes completar todos los campos
                        </h1>
                    </CSSTransition>
                ) : null}
                {msgerror && (
                    <CSSTransition
                        in={validation}
                        timeout={200}
                        classNames='show'
                    >
                        <h1 className='form-error'>
                            <i className='fas fa-exclamation-circle icon-alert'></i>
                            {msgerror}
                        </h1>
                    </CSSTransition>
                )}
                {msgsuccess && (
                    <CSSTransition
                        in={validation}
                        timeout={200}
                        classNames='show'
                    >
                        <h1 className='form-success'>
                            <i className='fas fa-check-circle icon-alert'></i>
                            {msgsuccess}
                        </h1>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </>
    );
};

export default React.memo(UserMain);
