import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(1),
//     },
//     input: {
//         display: 'none',
//     },
// }));

class  AddToFavorites extends React.Component{

    render() {
        return(
            <div>
                <Button onClick={this.props.handleAddToFavorites} variant="contained" color="secondary"> Add to favorites </Button>
                {/*<button onClick={this.props.handleAddToFavorites} className={"AddToFavorites"}>Add to favorites</button>*/}
            </div>
        )
    }
}
export default AddToFavorites
