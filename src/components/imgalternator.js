
import imgNumeracion from '../images/numeracion.gif';
import imgBoole from '../images/boole.gif';
import imgCompuertas from '../images/compuertas.gif';
import { useLayoutEffect } from 'react';
import React from 'react';


class ImageAlternator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {imgIndex: 0};
      this.imgArray = [imgNumeracion, imgBoole, imgCompuertas];
    }
  
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), this.props.interval);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {    
        this.setState({      
            imgIndex: (this.state.imgIndex >= 2) ? 0 : this.state.imgIndex + 1
        });  
    };

    render() {
        return (
            <div>
                <img 
                    src={this.imgArray[this.state.imgIndex]} 
                    width={this.props.width} 
                    height='auto' 
                    style={{opacity:'85%'}}
                />
            </div>
        );
    }
  }

export default ImageAlternator;