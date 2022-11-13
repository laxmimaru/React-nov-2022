const Footer=(props)=>{
    console.log('props = ', props);
    console.log('year = ', props.year);

    return <div>
        <center>
        <hr/>
            <h2>&copy; ALl rights reserved - {props.year}</h2>
            
        </center>
    </div>
}

export default Footer;