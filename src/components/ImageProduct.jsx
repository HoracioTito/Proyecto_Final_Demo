import Carousel from 'react-bootstrap/Carousel';

const ImageProduct = ({productDetail}) => {
    
    /* Datails Product - Slider - Carousel */
    console.log(productDetail)

    return (

        <Carousel fade >
        {
            productDetail?.productImgs?.map((img) => (
                
                    <Carousel.Item key={img} >
                        <img
                            className="d-block w-100"
                            style={{ height : '300px' , objectFit: 'contain' }}
                            src={img}
                            alt="First slide"
                            slide
                            
                        />

                    </Carousel.Item>
                

            ))
            }
            </Carousel>
           
    );
};

export default ImageProduct;