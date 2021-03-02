import React, { useEffect, useState } from 'react'
import DisplayStaticData from "../Components/DisplayStaticData";
import { aboutUsApi } from '../Constants/urlConstants';
import apiRequest from '../Requests/apiRequestFunction';
import "../App.scss"
import { FeatureToggle } from 'unleash-client-react';
const AboutUs = () => {
    const [loading, isLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        (async function fetchData() {
            const apiData = await apiRequest(aboutUsApi, { method: "GET" });
            setTitle(apiData.title);
            setDescription(apiData.description);
            isLoading(false);
        })()
    }, [])
    return (
        <FeatureToggle featureName="aboutus">
            <DisplayStaticData loading={loading} title={title} description={description} />
        </FeatureToggle>
    )

}
export default AboutUs