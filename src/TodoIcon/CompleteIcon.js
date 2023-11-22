import React from 'react';
import { TodoIcon } from './';
function CompleteIcon({ completed, onComplete}) {
    return (
        <TodoIcon
            type="Complete"
            color={ completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    );
}

export {CompleteIcon};