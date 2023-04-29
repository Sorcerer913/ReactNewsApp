import React, {useEffect, useLayoutEffect, useState} from "react";
import {NavigationView} from "../../../components/NavView"
import {useHistory} from "react-router-dom";

export const NavigationComponent = () => {

    const history = useHistory()
    const handleHome = () => history.push(`/1`)
    // useLayoutEffect(() => {
    //
    // })

    return (
        <NavigationView onHome={handleHome} onBack={history.goBack}></NavigationView>
    )
}