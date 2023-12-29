import { useState, useEffect } from "react";


function HomePageHook(newString) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData('Welcome to cognizant family newString' + newString);
    }, [newString])
    console.log('test')

    return [data];
}

export default HomePageHook