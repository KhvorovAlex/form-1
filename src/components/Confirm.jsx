import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const {
            values: { firstName, lastName, email, ocupation, city, bio },
        } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar onClick={() => console.log('work!')} title="Проверьте данные" />
                    <List>
                        <ListItem primaryText="First Name" secondaryText={firstName} />
                        <ListItem primaryText="Last Name" secondaryText={lastName} />
                        <ListItem primaryText="Email" secondaryText={email} />
                        <ListItem primaryText="Ocupation" secondaryText={ocupation} />
                        <ListItem primaryText="City" secondaryText={city} />
                        <ListItem primaryText="Bio" secondaryText={bio} />
                    </List>
                    <br />
                    <RaisedButton
                        label="Подтвердить"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Назад"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15,
    },
}

export default Confirm
