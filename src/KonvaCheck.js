import React, {useEffect, useState} from "react";
import {Circle, Image, Layer, Rect, RegularPolygon, Shape, Stage} from "react-konva";
import Konva from "konva";


// массив объектов, таргет к которому цепляются, и координаты относительно таргета
// на основании таргета вычисляются абсолютные координаты

//https://line-f.ru//i/part/ar-15_middle_handguard_zTSZkYv.png
//https://line-f.ru//i/part/ar_gasblock_N516v7K.png
//https://line-f.ru///i/part/ar_dtk_1GRVztw.png
//https://line-f.ru///i/part/ar_mag_VLMHvIm.png
//https://line-f.ru//i/part/ar_charginghandle_MwtsIXB.png
//https://line-f.ru//i/part/ar_handlecarry_KWf0ags.png
//https://line-f.ru//i/part/ar_buffertube_XXdqgHx.png
//https://line-f.ru//i/part/ar_stock_rPaB1XY.png
export default function KonvaCheck() {
    const [firstX, setFirstX] = useState(0);
    const [firstY, setFirstY] = useState(0);
    const [secondX, setSecondX] = useState(300);
    const [secondY, setSecondY] = useState(300);
    const resX = 46;
    const resY = -137;

    const objects = [
        {
            imgName: "AR_BASE",
            image: "https://line-f.ru//i/weapon/ar-15_16_base_DFopAAN.png",
            width: 3000,
            baseCoordinates: {
                x: 100,
                y: 100
            },
            imgComponent: null
        },
        {
            imgName: "AR_PISTOL_GRIP",
            image: "https://line-f.ru//i/part/ar_pistolgrip_iWaahlu.png",
            width: 500,
            baseCoordinates: {
                x: 300,
                y: 300
            },
            imgComponent: null
        }
    ]


    const [image1, setImage1] = useState(new window.Image());
    const [image2, setImage2] = useState(new window.Image());

    useEffect(() => {

    }, [])


    useEffect(() => {

        // objects.map(e => {
        //     const img = new window.Image();
        //     img.src = e.image;
        //     e.imgComponent = img;
        // })

        // const img1 = new window.Image();
        // img1.src = "https://line-f.ru//i/weapon/ar-15_16_base_DFopAAN.png";

        const biggestImg = Math.max(...objects.map(object => object.width));
        const ratio = (window.innerWidth / biggestImg * 0.7);
        console.log(ratio);
        console.log(biggestImg);

        const image1 = new window.Image();
        image1.src = "https://line-f.ru//i/weapon/ar-15_16_base_DFopAAN.png";
        image1.height = image1.naturalHeight * ratio;
        image1.width = image1.naturalWidth * ratio;
        setImage1(image1);

        const img2 = new window.Image();
        img2.src = "https://line-f.ru//i/part/ar_pistolgrip_iWaahlu.png";
        img2.height = img2.naturalHeight * ratio;
        img2.width = img2.naturalWidth * ratio;
        setImage2(img2);


    }, []);


    // const handleDragEnd = e => {
    //         const currentFirstX = e.target.attrs.x;
    //         setFirstX(currentFirstX)
    //
    //         const currentFirstY = e.target.attrs.y;
    //         setFirstY(currentFirstY)
    // }

    const handleDragEndFirst = e => {
        const currentFirstX = e.target.attrs.x;
        setFirstX(currentFirstX)
        setSecondX(currentFirstX-resX);

        const currentFirstY = e.target.attrs.y;
        setFirstY(currentFirstY)
        setSecondY(currentFirstY- resY)
    };

    const handleDragEndSecond = e => {
        const currentSecondX = e.target.attrs.x;
        setSecondX(currentSecondX);

        const currentSecondY = e.target.attrs.y;
        setSecondY(currentSecondY)
    };

    return (
        <div>
            <p> AR X: {firstX} Y: {firstY}</p>
            <p> Grip <p>X: {secondX}</p> <p>Y: {secondY}</p></p>
            <p> Res <p>X: {firstX - secondX}</p> <p>Y: {firstY - secondY}</p></p>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Image
                        x={firstX}
                        y={firstY}
                        image={image1}
                        draggable
                        onDragEnd={handleDragEndFirst}

                    />
                </Layer>
                <Layer>
                    <Image
                        x={secondX}
                        y={secondY}
                        image={image2}
                        draggable
                        onDragEnd={handleDragEndSecond}
                    />
                </Layer>
            </Stage>
        </div>

    );
}
