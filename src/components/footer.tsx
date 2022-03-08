import { useState, useEffect } from 'react';

// CSS
import '../styles/scss/footer.scss';

// Sidebar
const Footer = () => {

    // States
    const [fixedFooter, setFixedFooter] = useState(false);

    useEffect(() => {

        // Inner frame height
        var intFrameHeight = window.innerHeight;

        // Body's height
        let body: HTMLBodyElement | null = document.querySelector('body');

        if (body !== null) {
            let height = body.clientHeight;

            if (height > intFrameHeight) {
                setFixedFooter(false);
            } else {
                setFixedFooter(true);
            }
        }
    }, [])

    return (
        <>
            <footer id="footer" className={`${fixedFooter ? 'fixedFooter' : 'noFixedFooter'}`}>
                <div className="footer-copyright text-center py-3">
                    <div className="container-footer">
                        &copy; {new Date().getFullYear()} <a href={window.location.origin + '/index.html'}>delphin.bock</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;