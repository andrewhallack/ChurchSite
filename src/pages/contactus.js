import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import { HeroContainer2, HeroContent } from './PageElements/HeroElements';
import { Column1, Column2, Heading, InfoContainer, InfoLi, InfoRow, InfoUl, InfoWrapper, ListContent, ListRow, MapContainer, MapContent, SubTitle, TextWrapper, ListItemTitle, TopLine, MapHeader, Partition, PartitionContainer } from './PageElements/InfoElements';

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
                                <InfoLi>13850 Beechnut Street Houston, TX 77083</InfoLi>
                                <InfoLi>281-741-0591</InfoLi>
                                <InfoLi>holyprotection@gmail.com</InfoLi>
                            </InfoUl>
                        </ListContent>
                        <ListContent>
                            <InfoUl>
                                <Heading>Parish Council</Heading>
                                <InfoLi>
                                    Fr. Julian Anitei
                                    <ListItemTitle>Parish Priest</ListItemTitle>
                                    Email: 
                                </InfoLi>

                                <InfoLi>
                                    George Abuata
                                    <ListItemTitle>Parish Council President</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    Dan Stan
                                    <ListItemTitle>Parish Council Vice President</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    Gabriel Haddad
                                    <ListItemTitle>Secretary</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    John Dakhour
                                    <ListItemTitle>Treasurer</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    Mourice Shagoury
                                    <ListItemTitle>Auditor</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    Marius Goja
                                    <ListItemTitle>Auditor</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    Timothy Krill
                                    <ListItemTitle>Chanter</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                
                                <InfoLi>
                                    Daniela Abayan
                                    <ListItemTitle>Ladies' Auxiliary</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    Elena Stan
                                    <ListItemTitle>Religious Education</ListItemTitle>
                                    Email: 
                                </InfoLi>
                                
                                <InfoLi>
                                    Anca Theodora Williams
                                    <ListItemTitle>Youth Director</ListItemTitle>
                                    Email: 
                                </InfoLi>
                            </InfoUl>
                        </ListContent>
                    {/* </InfoRow> */}
                </ListRow>
                <PartitionContainer>
                    <Partition></Partition>
                </PartitionContainer>              
            </InfoContainer>
            <MapContainer>
                <MapContent>
                    <Heading>Map</Heading>
                    <div style={{minWidth: '70%', 
                                 height: '70vh', 
                                 maxWidth: '80%', 
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
