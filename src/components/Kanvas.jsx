import React, {useEffect, useState} from "react";
import {Stage} from "react-konva";
import CoordinatesInfo from "./CoordinatesInfo";
import GunComponent from "./GunComponent";

export default function Kanvas({components}) {

    useEffect(() => {
        console.log(components)
    }, [components])

    return (
        <div>
            {/*<CoordinatesInfo components={components}/>*/}
            <Stage width={window.innerWidth} height={window.innerHeight}>
                {<GunComponent
                    component={components.filter(component => component.target === "ROOT")[0]}
                    components={components}
                />
                }
                {components.map(component =>
                    <GunComponent
                        component={component}
                        components={components}
                    />)}
            </Stage>
        </div>
    )
}
