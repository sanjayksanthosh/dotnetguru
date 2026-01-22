
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, PlayCircle, FileText, Monitor, Layers, Star } from "lucide-react";

const Combo = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <TopBar />
            <Navbar />
            <main className="flex-grow">
                {/* Course Header */}
                <div className="bg-gradient-to-r from-red-700 to-red-900 pt-16 pb-24 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-2 mb-4 text-white/80 text-sm">
                                <span>Home</span>
                                <span>/</span>
                                <span>Courses</span>
                                <span>/</span>
                                <span className="text-white font-medium">Combo Package</span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold mb-4">
                                <Star size={12} fill="currentColor" /> BEST SELLER
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6">.NET Full Stack Developer Bundle</h1>
                            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl">
                                The ultimate package to transform your career. Includes C#, ASP.NET Core, SQL Server, and Real-time Projects.
                            </p>
                            <div className="flex items-center gap-6 mt-8">
                                <div className="flex items-center gap-2">
                                    <Layers size={20} />
                                    <span>4-in-1 Bundle</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Monitor size={20} />
                                    <span>Online Training</span>
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
                                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Package Overview</h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        This specialized package is designed for students and professionals who want to become full-stack .NET developers.
                                        It brings together our three flagship courses into one cohesive learning path, saving you money and ensuring you learn the complete stack.
                                    </p>

                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Everything Included</h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex items-start gap-4 p-4 border rounded-lg bg-gray-50">
                                            <div className="bg-purple-100 p-3 rounded-full text-purple-600 shrink-0">
                                                <span className="font-bold">C#</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">1. C# Programming Masterclass</h4>
                                                <p className="text-sm text-gray-600">From basics to advanced concepts like LINQ and Asynchronous programming.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 border rounded-lg bg-gray-50">
                                            <div className="bg-blue-100 p-3 rounded-full text-blue-600 shrink-0">
                                                <span className="font-bold">ASP</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">2. ASP.NET Core 7.0 MVC</h4>
                                                <p className="text-sm text-gray-600">Build modern, scalable web applications and REST APIs.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 border rounded-lg bg-gray-50">
                                            <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">
                                                <span className="font-bold">SQL</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">3. SQL Server 2022</h4>
                                                <p className="text-sm text-gray-600">Master database design, querying, and performance tuning.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 border rounded-lg bg-gray-50">
                                            <div className="bg-gray-200 p-3 rounded-full text-gray-700 shrink-0">
                                                <span className="font-bold">Git</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">4. Tools & Real-time Skills</h4>
                                                <p className="text-sm text-gray-600">GitHub, Azure basics, and Resume preparation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Syllabus Accordion (Brief) */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Learning Path</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                                            Month 1: Foundation (C# & SQL)
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 space-y-2 pt-2">
                                            <p>Concurrent sessions on C# Basics and SQL Server Fundamentals to build a strong base.</p>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                                            Month 2: Web Development (ASP.NET Core)
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 space-y-2 pt-2">
                                            <p>Deep dive into ASP.NET Core MVC, Entity Framework, and connecting to your SQL database.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                                            Month 3: Advanced & Real-time Project
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 space-y-2 pt-2">
                                            <p>Working on a complete e-commerce or management application integrating all technologies.</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Video Card */}
                                <Card className="overflow-hidden shadow-xl border-primary/20 border-2">
                                    <div className="aspect-video bg-gray-900 relative group cursor-pointer">
                                        <img src="/images/placeholder.jpg" alt="Course Preview" className="w-full h-full object-cover opacity-60" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <PlayCircle size={32} className="text-white fill-current" />
                                            </div>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-baseline gap-2 mb-4">
                                            <span className="text-3xl font-bold text-primary">₹13000</span>
                                            <span className="text-gray-400 line-through">₹25000</span>
                                            <span className="text-red-500 text-sm font-semibold animate-pulse">LIMITED OFFER</span>
                                        </div>
                                        <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-red-900 transition-all shadow-lg hover:shadow-xl mb-4 transform hover:-translate-y-1">
                                            Get the Bundle
                                        </button>
                                        <p className="text-center text-sm text-gray-500 mb-6">30-Day Money-Back Guarantee</p>

                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-gray-800">Bundle includes:</h4>
                                            <ul className="space-y-3 text-sm text-gray-600">
                                                <li className="flex items-center gap-3">
                                                    <Monitor size={18} className="text-primary" />
                                                    <span>3 Complete Courses</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <FileText size={18} className="text-primary" />
                                                    <span>Real-time Project</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <CheckCircle2 size={18} className="text-primary" />
                                                    <span>Mock Interviews</span>
                                                </li>
                                            </ul>
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

export default Combo;
