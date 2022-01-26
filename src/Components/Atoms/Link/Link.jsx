const Link = (data) => {
    const download = data.downloadCheck
    const otherComponents = !data.children ? <></> : data.children
    data = !data.data ? {site: "#"} : data.data
    return (

        <a href={data.site === undefined ? '#' : data.site} rel="noopener noreferrer" target={"_blank"}
           download={download}>
            {otherComponents}
        </a>
    );
}

export default Link;