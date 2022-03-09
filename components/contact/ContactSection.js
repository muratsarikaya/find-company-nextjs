import React from 'react'
import styles from "./contact.module.css"
import ContactCard from "./ContactCard";
import { GoogleMap,useJsApiLoader } from '@react-google-maps/api';

const office = {
    'address': '7652 Washington Avenue, Suite 315 Miami Beach, FL 33139'
}

const numberInfo = [
    {
        'title': 'Phone',
        'value': '800 987 6543'
    },
    {
        'title': 'Email',
        'value': 'asdf@asdf.com'
    },
    {
        'title': 'Website',
        'value': 'www.adsf.com.tr',
    }
]
const days = [
    {
        'title': 'Sunday',
        'time': 'Closed'
    },
    {
        'title': 'Monday-Friday',
        'time': '10AM - 8PM'
    },
    {
        'title': 'Saturday',
        'time': '10AM - 2PM'
    }
]
const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 41.0572232,
    lng: 28.4428617
};

const ContactSection = (props) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCbSJ0GLGCtqxqwOGbCaTBXmLa9hQONmcU"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return (
        <div className={styles.contact__section}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ContactCard office={office} title="Corporate Office" icon="fa fa-map-marker"/>
                    </div>
                    <div className="col-4">
                        <ContactCard numberInfo={numberInfo} title="Direct Contact" icon="fa fa-phone"/>
                    </div>
                    <div className="col-4">
                        <ContactCard days={days} title="Business Hours" icon="fa fa-briefcase"/>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        {
                            isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={11}
                                    onLoad={onLoad}
                                    onUnmount={onUnmount}
                                >
                                    { /* Child components, such as markers, info windows, etc. */ }
                                    <></>
                                </GoogleMap>
                            ) : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContactSection;
