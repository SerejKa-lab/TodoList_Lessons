import React from 'react';
import styles from './ListHeader.module.css'
import { connect } from 'react-redux';
import AddItemForm from '../../AddItemForm/AddItemForm';
import ListTitle from './ListTitle/ListTitle';
import Preloader from '../../Preloader/Preloader';
import { addTask, addTaskActive, deleteList, ALL_S, COMPLETED, ACTIVE } from '../../../Redux/reducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ListHeader extends React.Component {

    state = {
        maxTasksCount: 33
    }

    deleteList = () => {
        this.props.deleteList(this.props.listId)
            .then(() => {
                if (this.props.history.location.pathname !== '/') {
                    this.props.history.push('/')
                }
            })
    }

    addTask = (title) => {
        const { listId, filterValue, taskIsAdding } = this.props;

        if ( (filterValue === COMPLETED || filterValue === ALL_S) && !taskIsAdding )  {
            this.props.addTask(listId, title)
        }

        if (filterValue === ACTIVE && !taskIsAdding) {
            this.props.addTaskActive(listId, title)
        }
    }


    render() {

        const {listId, title, page, totalCount, filterValue, listTitles,
            generalCount, listDeliting, titleUpdating, taskIsAdding} = this.props
        const { maxTasksCount } = this.state
        const totalTasksCount = filterValue === ALL_S ? totalCount : generalCount

        const taskTitleValidation = (newTitle) => {
            if (newTitle === '' || newTitle.length > 100) {
                return true
            }
        }

        const loaderStyle ={
            fill: 'rgb(85, 47, 11)', height: '8px', position: 'absolute', right: '50%', bottom: '-14px'}

            const addTaskHint = 
            'Please, enter a title with length from 1 to 100 chars or press "Esc" to reset'

        return (
            <div className={styles.list_header}>
                <ListTitle listId={listId} title={title} page={page} listTitles={listTitles}
                    listDeliting={listDeliting} titleUpdating={titleUpdating} />
                {/* форма добавления задач */}
                {totalTasksCount < maxTasksCount
                    && <div className={styles.list_header_add_form}>
                        <AddItemForm
                            placeholder='Add new task'
                            hint={addTaskHint}
                            validationFunc={taskTitleValidation}
                            addItem={this.addTask} />
                        {taskIsAdding && <Preloader {...loaderStyle} />}
                    </div>}
                
                {/*delete icon display modes */}
                { !listDeliting
                    &&<i className={'fa fa-close ' + styles.delete_button} onClick={this.deleteList} />
                }
                { listDeliting
                    &&<i className={'fa fa-close ' + styles.delete_button}/>
                }
            </div>
        )
    }

}


const mdtp = { addTask, addTaskActive, deleteList }

export default compose (
    connect(null, mdtp ),
    withRouter
)(ListHeader);

