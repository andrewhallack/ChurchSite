import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import { Heading, InfoContainer, InfoLi,InfoUl, ListContent, ListRow, MapContainer, MapContent, ListItemTitle, ImgWrap, Img, InfoA } from './PageElements/InfoElements';
import Church from '../images/church.jpg'; 

function Map() {
    return (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{lat: 29.688933006815283, lng: -95.62746743018813}}
        >
            <Marker position={{lat: 29.688874482614427, lng: -95.6274545074987}} />
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const ContactUs = () => {
    return (
        <>
            <InfoContainer>
                <ListRow>
                    {/* <InfoRow imgStart={'false'}> */}
                        <ListContent>
                            <InfoUl>
                                <Heading>The Holy Protection of the Mother of God</Heading>
                                <InfoLi>
                                    <ListItemTitle>Address</ListItemTitle>
                                    <InfoA target="_blank" href="https://www.google.com/maps/place/13850+Beechnut+St,+Houston,+TX+77083/@29.6888351,-95.6296454,17z/data=!3m1!4b1!4m5!3m4!1s0x8640ddeba0b7d9fb:0xc4ffa6bcb0ff6d1c!8m2!3d29.6888305!4d-95.6274567">
                                        13850 Beechnut Street 
                                        <br></br>
                                        Houston, TX 77083
                                    </InfoA>
                                </InfoLi>
                                <InfoLi>
                                    <ListItemTitle>Phone</ListItemTitle>
                                    (281) 741-0591
                                </InfoLi>
                                <InfoLi>
                                    <ListItemTitle>Email</ListItemTitle>
                                    holyprotection@gmail.com
                                </InfoLi>
                            </InfoUl>
                            <ImgWrap style={{paddingTop: '24px'}}>
                                <Img src={Church} />
                            </ImgWrap>
                        </ListContent>
                        <ListContent>
                            <InfoUl>
                                <Heading>Parish Council</Heading>
                                <InfoLi>
                                    <ListItemTitle>Parish Priest</ListItemTitle>
                                    Fr. Julian Anitei<br></br>
                                    Email: 
                                </InfoLi>

                                <InfoLi>
                                    <ListItemTitle>Parish Council President</ListItemTitle>
                                    George Abuata<br></br>                                   
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    <ListItemTitle>Parish Council Vice President</ListItemTitle>
                                    Dan Stan<br></br>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    <ListItemTitle>Secretary</ListItemTitle>
                                    Gabriel Haddad<br></br>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    <ListItemTitle>Treasurer</ListItemTitle>
                                    John Dakhour<br></br>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    <ListItemTitle>Auditor</ListItemTitle>
                                    Mourice Shagoury<br></br>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    <ListItemTitle>Auditor</ListItemTitle>
                                    Marius Goja<br></br>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    <ListItemTitle>Chanter</ListItemTitle>
                                    Timothy Krill<br></br>
                                    Email: 
                                </InfoLi>
                                
                                
                                <InfoLi>
                                    <ListItemTitle>Ladies' Auxiliary</ListItemTitle>
                                    Daniela Abayan<br></br>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    <ListItemTitle>Religious Education</ListItemTitle>
                                    Elena Stan<br></br>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    <ListItemTitle>Youth Director</ListItemTitle>
                                    Anca Theodora Williams<br></br>
                                    Email: 
                                </InfoLi>
                            </InfoUl>
                        </ListContent>
                    {/* </InfoRow> */}
                </ListRow>
                {/* <PartitionContainer>
                    <Partition></Partition>
                </PartitionContainer>               */}
            </InfoContainer>
            <MapContainer>
                <MapContent>
                    <Heading>Map</Heading>
                    <div style={{minWidth: '50%', 
                                 height: '70vh', 
                                }}>
                        <WrappedMap 
                            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
                            // googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAVO3UshJbPS0hyu9nSefyex79cMkR1h1M'}
                            loadingElement={<div style={{height: "100%"}}/>}
                            containerElement={<div style={{height: "100%"}}/>}
                            mapElement={<div style={{height: "100%"}}/>}
                        />
                    </div>
                </MapContent>
            </MapContainer>
        </>
    )
}

export default ContactUs
