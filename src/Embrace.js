
function Header() {
    return(
        <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWoGMkjZvIiOqLQ1UZNJ_Yj6Sm5EIEOYyf8F-b4aB&s"  width="60px" alt="react" />
            </header>
    );
};

function MainContent() {
    return(
        <>
        <h2>5 reasons i am exicited to learn react</h2>

        <ol>
            <li>just</li>
            <li>i am ssaying</li>
            <li>its great</li>
            <li>i love it</li>
            <li>i am gonna do it</li>
        </ol>
        </>
    );
};

function Footer(){
    return(
        <footer>© 2022 onejar development. All rights reserved.</footer>
    );

};

export default function Embrace () {
    return (
        <div>
            
            <Header />
            <MainContent />
            <Footer />
            
            
        </div>
    );
};