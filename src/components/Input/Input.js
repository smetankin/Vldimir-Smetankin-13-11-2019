import React from 'react';
import TextField from '@material-ui/core/TextField';

class Input extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <TextField
                    id="standard-basic"
                    // className={classes.textField}
                    label="City"
                    margin="normal" type={'text'} name={'city'} placeholder={'Weather'}
                />
            </form>
        )
    }
}
export default Input;
