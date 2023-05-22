import FooterImage from "../assets/image/footer.svg"

function Footer (){
    return(
        <footer className="bg-[#24272C] px-44 py-7 mt-20 flex items-center justify-between">
            <img src={FooterImage} alt="" className=""/>
            <p className="text-[#A8A8A8] text-xl">@itkmitl</p>
        </footer>
    )
}

export default Footer;