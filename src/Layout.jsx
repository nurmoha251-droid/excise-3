
const Header = () => {
    return(
        <h1>Header</h1>
    )
}




const Footer = () => {
return (
    <h2>Footer</h2>
)
}

const Why = () =>{
    return(
        <p>Why choose us becouse we are the</p>
    )
}

const Layout = () => {
    return(
        <div> 
        <Header/>
        <main>
        <Why/>
        </main>
        <Footer/>
        </div>
    )
}

export default Layout;