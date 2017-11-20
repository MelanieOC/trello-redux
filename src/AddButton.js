import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { addCard, addBoard, addList } from './actions';


class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false
    }
  }
  render() {
    const { tarjeta, board, card, boardId } = this.props;
    const funcion = tarjeta ? addList : board ? addBoard : addCard;
    const parametro = board ? '' : tarjeta ? tarjeta : card;
    const change = () => {
      this.setState({
        add: !this.state.add
      })
    }
    const holder = tarjeta ? 'Add a New List...' : board ? 'Board Name' : '';
    const message = tarjeta ? 'Add a New List...' : board ? 'Add new board...' : 'Add a New Card...';
    return (
      <div className={tarjeta ? 'tarjeta' : ''}>
        {
          this.state.add ?
            <div className={tarjeta || board ? 'tarea' : ''}>
              <form onSubmit={(e) => {
                e.preventDefault();
                card ? funcion(this.input.value, boardId, parametro) : funcion(this.input.value, parametro);
                change();
              }}>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl
                    componentClass="textarea"
                    placeholder={holder}
                    inputRef={ref => { this.input = ref; }}
                    required />
                </FormGroup>
                <div>
                  <Button type='submit' >{tarjeta ? 'Save List' : board ? 'Create Board' : 'Add'}</Button>
                  or <span className='cancel' onClick={change}>cancel</span>
                </div>
              </form>

            </div>
            :
            <div className={tarjeta || board ? 'tarea addNew' : 'addNew'} onClick={change}>
              {message}
            </div>
        }
      </div>
    )
  }
}

export default AddButton;