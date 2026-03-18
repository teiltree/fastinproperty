import { useState, useEffect } from 'react';
import { ChevronDown, Award, Users, Globe, Shield, Star, CheckCircle, Home, Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";

export default function AboutPage() {
    const [expandedSection, setExpandedSection] = useState(null);
    const [currentImageSlide, setCurrentImageSlide] = useState(0);

    // Gallery images for the slider
    const galleryImages = [
        "https://i.postimg.cc/jd2sZTcS/IMG_20251104_WA0027.jpg",
        "https://i.postimg.cc/m2kb84js/IMG_20251104_WA0028.jpg",
        "https://i.postimg.cc/fy2MDqzM/IMG_20251104_WA0029.jpg",
        "https://i.postimg.cc/bY3yxrQn/IMG_20251104_WA0030.jpg",
        "https://i.postimg.cc/zD0zCvnn/IMG_20251104_WA0031.jpg",
        "https://i.postimg.cc/WpXNGzMn/IMG_20251104_WA0032.jpg"
    ];

    // Auto-scroll effect for image gallery
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageSlide((prev) => {
                const nextSlide = prev + 1;
                return nextSlide >= galleryImages.length ? 0 : nextSlide;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, [galleryImages.length]);

    // Calculate slide offset
    const imageWidth = 800;
    const gapSize = 24;
    const slideWidth = imageWidth + gapSize;

    // @ts-ignore
    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const coreValues = [
        {
            icon: Shield,
            title: "Integrity",
            description: "We conduct our business with the highest ethical standards and transparency.",
            color: "text-amber-500"
        },
        {
            icon: Award,
            title: "Dedication",
            description: "We are committed to achieving the best possible outcomes for our clients.",
            color: "text-amber-500"
        },
        {
            icon: Globe,
            title: "Transparency",
            description: "We believe in clear, honest communication throughout the entire process.",
            color: "text-amber-500"
        },
        {
            icon: Star,
            title: "Service Excellence",
            description: "We strive to exceed expectations in every aspect of our service delivery.",
            color: "text-amber-500"
        },
        {
            icon: Users,
            title: "Personalized Attention",
            description: "Every client receives tailored solutions that meet their unique needs.",
            color: "text-amber-500"
        }
    ];

    const services = [
        "Large customer database with pre-approved and cash buyers",
        "Closed boardroom & Onsite Auctions",
        "Private Treaty Sales",
        "Online Auctions: Multi-property, Commercial, Industrial, Retail, Residential, Specialised Properties",
        "National Network of Conveyancers and Lawyer Firms",
        "Associated with most major banks and lending establishments",
        "National Network of Auctioneer Consultants & Property Professionals",
        "National Network of Property Maintenance Firms",
        "Bond Origination Service Provider",
        "Property Insurance Service Providers",
        "Comprehensive & Detailed Marketing Campaign",
        "Professional Real Estate Photography & 3D Virtual Tours",
        "Gas & Electrical Compliance Service Providers",
        "Property Evaluations"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[80vh] overflow-hidden"
                style={{
                    backgroundImage: `url('https://i.postimg.cc/764HVTsW/IMG-20251104-WA0053.jpg')`
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-100/10 to-blue-100/10"></div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14">
                    <div className="flex items-start sm:items-center justify-between gap-6 flex-col sm:flex-row">
                        <div>
                            <div className="flex items-center gap-2 text-blue-200/90 text-sm">
                                <Link to="/" className="hover:text-yellow-400 transition-colors"></Link>
                                <span className="text-yellow-400"></span>
                                <span className="text-yellow-400 font-semibold"></span>
                            </div>
                            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
                                Transforming Real Estate Auctions
                            </h1>
                            <p className="mt-3 text-blue-100 max-w-2xl text-lg">
                                Bringing fresh innovation to Zimbabwe's property auction industry
                            </p>
                        </div>
                        <div className="shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-4 ring-1 ring-white/20 shadow-lg">
                            <Home className="w-12 h-12 text-yellow-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Auto-Scrolling Image Gallery Section */}
            <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 rounded-full px-4 py-2 mb-4">
                            <Sparkles className="w-5 h-5 text-yellow-700" />
                            <span className="text-yellow-700 text-sm font-semibold">Our Work</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Properties We Handle</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    {/* Gradient overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling container */}
                    <div
                        className="flex gap-6 px-4"
                        style={{
                            transform: `translateX(-${currentImageSlide * slideWidth}px)`,
                            transition: 'transform 1s ease-in-out',
                            width: 'max-content'
                        }}
                    >
                        {/* Triple the images to ensure seamless looping */}
                        {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[800px] h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group relative"
                            >
                                <img
                                    src={image}
                                    alt={`Property ${(index % galleryImages.length) + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Brand Introduction & Mission Statement */}
                    <div className="mb-20">
                        {/* Heading */}
                        <div className="text-center mb-12">
                            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">About Fastin Property Auctions</h2>
                            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto rounded-full"></div>
                        </div>

                        {/* Mission Statement with Background Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-900/10">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-90"
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/mDSb62KT/IMG-20251104-WA0050.jpg')`
                                }}
                            ></div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-black/40 to-blue-900/20"></div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full translate-y-40 -translate-x-40 blur-3xl"></div>

                            {/* Content */}
                            <div className="relative z-10 p-10 md:p-16">
                                <div className="max-w-5xl mx-auto">
                                    {/* Quote Icon */}
                                    <div className="mb-8">
                                        <svg className="w-16 h-16 text-yellow-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>

                                    <blockquote className="space-y-6">
                                        <p className="text-lg md:text-xl text-white leading-relaxed font-light">
                                            At Fastin Property Auctions, we are redefining the landscape of real estate auctions in Zimbabwe. As a boutique firm, we combine a personalized approach with professional excellence, offering clients a fresh and progressive alternative to traditional property services.
                                        </p>

                                        <p className="text-lg md:text-xl text-white leading-relaxed font-light">
                                            With vast industry experience, our team is both seasoned and forward-thinking—committed to continuous learning and innovation. We pride ourselves on being approachable, confident, and deeply passionate about helping our clients achieve their property goals.
                                        </p>

                                        <p className="text-lg md:text-xl text-white leading-relaxed font-light">
                                            Our services span online and onsite auctions, private treaty sales, property evaluations, marketing campaigns, and legal compliance. With a national footprint and trusted partnerships across the industry, we deliver results with integrity, precision, and enthusiasm.
                                        </p>

                                        <div className="pt-6 border-t border-white/20">
                                            <p className="text-xl md:text-2xl text-yellow-400 leading-relaxed font-medium">
                                                At Fastin Property Auctions, every client interaction is met with the same energy and dedication as our very first day—because your success is our priority.
                                            </p>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy Section */}
                    <div className="mb-20">
                        <div className="bg-white rounded-2xl shadow-lg p-12 border-l-4 border-amber-500">
                            <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-light">
                                We approach our work with the highest degree of motivation, it's more than a career... it's like our oxygen! We strive to become a trusted and
                                recognisable brand within the Auction Profession. We hope with you as our client, we can achieve this in time. We believe in making decisions in ways to
                                best serve our clients' interest. Not surprisingly this philosophy has enabled us to help more clients and we love it.
                            </p>
                        </div>
                    </div>

                    {/* Expandable Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                        {/* Company Overview */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div
                                className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 cursor-pointer flex justify-between items-center"
                                onClick={() => toggleSection('overview')}
                            >
                                <h3 className="text-2xl font-semibold">Company Overview</h3>
                                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSection === 'overview' ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`transition-all duration-300 ${expandedSection === 'overview' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        Fastin Property Auctions is a specialist property brokerage and Auctioneer / Registered Estate Agenting company , established with a dream of bringing a new and fresh approach to selling real estate via Property Auctions.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our Specialist property team are experts in property sales, Auctioneer / Registered Estate Agenting, brokerage, rentals, and appraisals of property providing accurate and in-depth knowledge, advice and service to both buyers and sellers of property. We specialise in commercial, industrial, retail and residential property disposals on both auction and private treaty platforms.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our focus is not only on the sale of the property, but on providing eﬀective and eﬃcient service, advisory service, accurate information, and innovative solutions to both buyers and sellers. We oﬀer unmatched expertise in the property sector, and our experienced team is, driven, and results focused
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Fastin Property Auctions */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div
                                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white p-6 cursor-pointer flex justify-between items-center"
                                onClick={() => toggleSection('why')}
                            >
                                <h3 className="text-2xl font-semibold">Why Fastin Property Auctions</h3>
                                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSection === 'why' ? 'rotate-180' : ''}`} />
                            </div>
                            <div className={`transition-all duration-300 ${expandedSection === 'why' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <div className="p-6 space-y-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        The old belief that auctions are for sellers in desperate need of a sale has long since passed. Globally, auctions are becoming increasingly popular. They are a very effective way to sell your property, as the buying community knows you are committed to making an immediate sale. Almost all property types can be, and are being, sold via auction and auction houses.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        The main component of an auction is that there is a time limit on selling negotiations. This can create more impetus and urgency from prospective buyers if there is a good chance the property is in high demand, which may be a great means of driving up the price.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        We provide the best possible solutions in sales and marketing of assets and with our in depth knowledge of the local markets and our massive database of buyers we are in a unique position to provide a faster more accurate and streamlined process of Auctioning your property.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="mb-20">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-900 to-amber-600 text-white p-8">
                                <h3 className="text-3xl font-semibold mb-4">Service Options & Networking</h3>
                                <p className="text-blue-100 text-lg">
                                    The Fastin Property Auctions Group offers a comprehensive range of services and nationwide networking which gives properties
                                    the paramount exposure and attention in the real estate marketplace.
                                </p>
                            </div>
                            <div className="p-8">
                                <h4 className="text-xl font-semibold text-gray-800 mb-6">Our Services Include:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services.map((service, index) => (
                                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                                            <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div>
                        {/* Core Values Section with Background */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-900/10 mb-12">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://i.postimg.cc/764HVTsW/IMG-20251104-WA0053.jpg')`
                                }}
                            ></div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/92 via-blue-900/40 to-blue-900/20 bg-transparent"></div>

                            {/* Content */}
                            <div className="relative z-10 text-center py-16 px-8">
                                <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">Core Values</h3>
                                <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full shadow-lg"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreValues.map((value, index) => {
                                const IconComponent = value.icon;
                                return (
                                    <div key={index} className="group">
                                        <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-amber-500">
                                            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <h4 className="text-xl font-semibold text-blue-900 mb-4">{value.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}