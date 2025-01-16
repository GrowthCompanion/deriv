
import MobileSidebar from "@/components/mobile-sidebar";

const Navbar = async () => {
    // Placeholder URL for the "Contact Us" button
    const contactUsUrl = "https://deriv-affiliate.tiiny.site";

    return ( 
        <div className="flex items-center p-4">
            <MobileSidebar />
            <div className="flex w-full justify-end">   
             
                <a href={contactUsUrl} className="ml-4 px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-600 transition duration-300 ease-in-out">Contact Us</a>
            </div>
        </div>
    );
}

export default Navbar;
