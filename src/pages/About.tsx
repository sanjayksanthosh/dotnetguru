
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <TopBar />
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <div className="bg-primary py-16 text-white text-center">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-2 text-primary-foreground/80">Learn more about DotNet Gurukul</p>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-primary">Who Are We?</h2>
                        <div className="prose max-w-none text-lg text-gray-700 space-y-4 leading-relaxed">
                            <p>
                                <strong>DotNetGurukul.com</strong> is run by <strong>Praveen Kumar M</strong>, founder of Vivekam Information Technologies.
                                We are a training and development company, striving to empower individuals with the knowledge and skills they need to unlock their full potential.
                            </p>
                            <p>
                                Our company is dedicated to creating dynamic learning experiences that inspire curiosity and drive continuous learning.
                                Our programs are designed to impart in-depth knowledge and industry insights to equip participants with a competitive edge.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
