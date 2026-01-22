
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, PlayCircle, FileText, Monitor } from "lucide-react";

const AspNet = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <TopBar />
            <Navbar />
            <main className="flex-grow">
                {/* Course Header */}
                <div className="bg-primary pt-16 pb-24 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-4 text-primary-foreground/80 text-sm">
                                <span>Home</span>
                                <span>/</span>
                                <span>Courses</span>
                                <span>/</span>
                                <span className="text-white font-medium">ASP.NET Core</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6">ASP.Net Core 7.0 MVC Online Training</h1>
                            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl">
                                Master the latest in web development. Build modern, scalable, and high-performance web applications with ASP.NET Core 7.0.
                            </p>
                            <div className="flex items-center gap-6 mt-8">
                                <div className="flex items-center gap-2">
                                    <Monitor size={20} />
                                    <span>Online Training</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileText size={20} />
                                    <span>Real-time Project</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 size={20} />
                                    <span>Certification</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 -mt-16 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Overview Card */}
                            <Card className="shadow-lg border-0">
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Overview</h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        This comprehensive course focuses on ASP.NET Core 7.0, covering the complete ecosystem from environment setup to deployment.
                                        It covers the Model-View-Controller (MVC) pattern in depth, along with modern web development practices.
                                    </p>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">What you'll learn</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Build robust Web Apps with ASP.NET Core",
                                            "Master MVC Design Pattern",
                                            "Entity Framework Core Integration",
                                            "Dependency Injection & Middleware",
                                            "Authentication & Authorization",
                                            "Web API Development"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Syllabus Accordion */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Curriculum</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                                            Phase I: The Fundamentals (Free)
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 space-y-2 pt-2">
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Introduction & Evolution of .NET</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Environment Setup & Project Layout</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Controllers, Actions & Routing</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Razor Views & HTML Helpers</span>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                                            Phase II: Advanced Concepts
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 space-y-2 pt-2">
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Working with Data (Model Binding)</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>State Management (Sessions, Cookies)</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Entity Framework Core (Database First & Code First)</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>LINQ Integration</span>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                                            Phase III: Modern Features & API
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 space-y-2 pt-2">
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>ASP.NET Core Identity (Security)</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Building RESTful Web APIs</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Dependency Injection in Depth</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Project Deployment (IIS & Azure)</span>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Video Card */}
                                <Card className="overflow-hidden shadow-xl border-0">
                                    <div className="aspect-video bg-gray-900 relative group cursor-pointer">
                                        <img src="/images/placeholder.jpg" alt="Course Preview" className="w-full h-full object-cover opacity-60" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <PlayCircle size={32} className="text-white fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-3xl font-bold text-primary">₹6000</span>
                                            <span className="text-gray-400 line-through">₹12000</span>
                                            <span className="text-green-600 text-sm font-semibold">50% OFF</span>
                                        </div>
                                        <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl mb-4">
                                            Enroll Now
                                        </button>
                                        <p className="text-center text-sm text-gray-500 mb-6">30-Day Money-Back Guarantee</p>

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-gray-800">This course includes:</h4>
                                            <ul className="space-y-3 text-sm text-gray-600">
                                                <li className="flex items-center gap-3">
                                                    <Monitor size={18} className="text-primary" />
                                                    <span>60 hours on-demand video</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <FileText size={18} className="text-primary" />
                                                    <span>Running notes & Code samples</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <CheckCircle2 size={18} className="text-primary" />
                                                    <span>Certificate of completion</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Instructor Card */}
                                <Card className="shadow-lg border-0">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-4">Course Instructor</h3>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                                                {/* Instructor Image */}
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Praveen Kumar M</h4>
                                                <p className="text-sm text-gray-600">Microsoft Certified Trainer</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AspNet;
