'use client';
import { useEffect, useState } from "react";
import { getData } from "./actions";

export default function Test() {
    const [info, setInfo] = useState<string>('')

    useEffect(() => {
        getData()
            .then((res) => setInfo(res))
    }, [])

    return <div>
        {info}
    </div>
}

