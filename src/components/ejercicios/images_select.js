
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';


function ImagesSelect({id, options, width, disabled}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {setIndex(0);}, []);

    const handlePrevious = (e) => {
        if (index > 0) setIndex(index - 1);
    };

    const handleNext = (e) => {
        if (index < options.length - 1) setIndex(index + 1);
    };
    
    const selectOptions = []; 
    options.forEach((element, index) => {
        selectOptions.push(
            <Carousel.Item>
                <img src={element} />
            </Carousel.Item>
        );
    }); 
    return (
        <>
            <Button 
                id="previous" 
                variant="primary" 
                style={{paddingTop:0, paddingBottom:0, fontSize:14, marginBottom:'5px'}}
                onClick={(e) => handlePrevious(e)}
                disabled={(index == 0) | disabled}
            >{"<"}</Button>
            <Button 
                id={id} 
                variant="secundary" 
                style={{marginLeft:'5px', paddingTop:0, paddingBottom:0, fontSize:14, marginBottom:'5px'}}
                disabled={true}
                value={index.toString()}
            >{index}</Button>
            <Button 
                id="next" 
                variant="primary" 
                style={{marginLeft:'5px', paddingTop:0, paddingBottom:0, fontSize:14, marginBottom:'5px'}}
                onClick={(e) => handleNext(e)}
                disabled={(index == options.length - 1) | disabled}
            >{">"}</Button>
            <Carousel 
                id="carousel" 
                disabled={disabled} 
                interval={null} 
                indicators={false} 
                prevIcon={null}
                nextIcon={null}
                activeIndex={index} 
                onSelect={null}
                style={{padding:'0px', marginTop:'0px', minWidth:width, maxWidth:width}}
            >
                {selectOptions}
            </Carousel>
        </>
    );
}


export default ImagesSelect;
