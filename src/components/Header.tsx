import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <section className="bg-accent-bg">
                <div className="container mx-auto">
                    <div className="grid py-2 md:py-0 mx-10 md:mx-0 md:grid-cols-2">
                        <div className="flex items-center">
                            <Link className="text-3xl font-bold" to={'/'}>
                                <h3>Recipes</h3>
                            </Link>
                        </div>
                        <div className="flex items-center md:justify-end my-auto py-4">
                            <ul>
                                <li className="inline-block"><Link to={'/'}>Home</Link></li>
                                <li className="inline-block before:content-['/'] before:p-2 before:inline-block before:text-accent text-primary"><Link to={'/'}>Recipes</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
};

export default Header;