import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Спасибо за заявку" />
                    <h1>Наш специалист выехал!</h1>
                    <img
                        src="http://risovach.ru/upload/2014/03/generator/vy-ecshe-ne-rf-togda-my-idem-k-vam_45573118_orig_.jpeg"
                        alt="Мы идем к вам"
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
