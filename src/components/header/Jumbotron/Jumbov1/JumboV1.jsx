import React from "react";
import { MDBJumbotron, MDBBtn,MDBCarouselInner,MDBView, MDBContainer, MDBRow, MDBCol ,MDBCarouselItem ,MDBCarousel} from "mdbreact";
import Style from "./JumboV1.module.css"
const JumboV1 = () => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron>
          {/* Crausel in jumbo/ */}
          <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
            {/* card */}
                <div className={Style.JumboCardConatiner}>
                <MDBRow>
                <MDBCol className="m-lg-3 p-lg-3 black" md="4">.col-md-4</MDBCol>
                <MDBCol className="red" md="6">.col-md-4</MDBCol>
              
            </MDBRow>
            </div>
            {/* end card  */}

          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumboV1;