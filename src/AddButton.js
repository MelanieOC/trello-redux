import React, { Component } from 'react';
import { FormControl, FormGroup, Button } from 'react-bootstrap';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false
    }
  }
  render() {
    const { tarjeta, board } = this.props;
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
              <form>
                <FormGroup controlId="formControlsTextarea">
                  <FormControl componentClass="textarea" placeholder={holder} />
                </FormGroup>
              </form>
              <div>
                <Button onClick={change} >{tarjeta ? 'Save List' : board ? 'Create Board' : 'Add'}</Button>
                or <span className='cancel' onClick={change}>cancel</span>
              </div>
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