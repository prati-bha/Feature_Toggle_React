import React, { useEffect, useState } from 'react'
import { privacyAndPolicyApi } from '../Constants/urlConstants';
import apiRequest from '../Requests/apiRequestFunction';
import DisplayStaticData from "../Components/DisplayStaticData";
import "../App.scss"
const PrivacyPolicy = () => {
    const [loading, isLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        (async function fetchData() {
            const apiData = await apiRequest(privacyAndPolicyApi, { method: "GET" });
            setTitle(apiData.title);
            setDescription(apiData.description);
            isLoading(false);
        })()
    }, [])
    return (
        <div>

            <DisplayStaticData loading={loading} title={title} description={description} />
        </div>
    )

}
export default PrivacyPolicy