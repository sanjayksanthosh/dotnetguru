
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, PlayCircle, FileText, Monitor, Database } from "lucide-react";

const SqlServer = () => {
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
                                <span className="text-white font-medium">SQL Server</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold mb-6">SQL Server 2022 Course</h1>
                            <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl">
                                Master Database Management. Learn SQL Server from scratch to advanced T-SQL development and administration.
                            </p>
                            <div className="flex items-center gap-6 mt-8">
                                <div className="flex items-center gap-2">
                                    <Database size={20} />
                                    <span>Database Expert</span>
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
                                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Overview</h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        A comprehensive guide to SQL Server 2022, starting from database fundamentals and moving into advanced querying,
                                        normalization, and database development using T-SQL. You will learn to design, implement, and manage complex databases.
                                    </p>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">What you'll learn</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Database fundamentals (ACID, Normalization)",
                                            "SQL Server Installation & Architecture",
                                            "Writing complex T-SQL Queries",
                                            "Joins, Subqueries & Unions",
                                            "Stored Procedures, Functions & Triggers",
                                            "Indexes & Performance Optimization"
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
                                            Phase I: Database Fundamentals (Free)
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 space-y-2 pt-2">
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Introduction to Data & Information</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>RDBMS Concepts & ACID Properties</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Database Normalization (1NF, 2NF, 3NF)</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>SQL Server Installation & Configuration</span>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                                            Phase II: T-SQL Development
                                        </AccordionTrigger>
                                        <AccordionContent className="text-gray-600 space-y-2 pt-2">
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>DDL, DML, DQL Commands</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Advanced Joins & Set Operators</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Stored Procedures & User Defined Functions</span>
                                            </div>
                                            <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                                <PlayCircle size={16} className="text-primary" />
                                                <span>Triggers & Cursors</span>
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
                                            <span className="text-3xl font-bold text-primary">₹4000</span>
                                            <span className="text-gray-400 line-through">₹8999</span>
                                            <span className="text-green-600 text-sm font-semibold">55% OFF</span>
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
                                                    <span>40 hours on-demand video</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <Database size={18} className="text-primary" />
                                                    <span>Practice Databases</span>
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

export default SqlServer;
