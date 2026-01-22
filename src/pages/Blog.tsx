
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

const Blog = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <TopBar />
            <Navbar />
            <main className="flex-grow pt-20">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold mb-4">Blog</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Blog posts would go here */}
                        <div className="bg-white rounded-lg shadow p-4">
                            <h3 className="font-bold mb-2">Blog Post 1</h3>
                            <p>Coming soon...</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;
