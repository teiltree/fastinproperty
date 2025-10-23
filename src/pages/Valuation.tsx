import { useState } from 'react';
import { Calculator, DollarSign, FileCheck, TrendingUp, Award, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ValuationPage() {
    const [offerAmount, setOfferAmount] = useState<string>('330000');
    const VAT_RATE = 0.15; // 15% VAT

    // Format number with commas
    const formatCurrency = (value: number): string => {
        return value.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };

    // Parse input value
    const parseAmount = (value: string): number => {
        return parseFloat(value.replace(/,/g, '')) || 0;
    };

    // Calculate deposit (10%, minimum $5,000)
    const calculateDeposit = (): number => {
        const amount = parseAmount(offerAmount);
        const deposit = amount * 0.10;
        return Math.max(deposit, 5000);
    };

    // Calculate buyer's fee (3%, minimum $5,000)
    const calculateBuyersFee = (): number => {
        const amount = parseAmount(offerAmount);
        const baseFee = amount * 0.03;
        const feeBeforeVat = Math.max(baseFee, 5000);
        return feeBeforeVat * (1 + VAT_RATE);
    };

    // Calculate total payable
    const calculateTotal = (): number => {
        return calculateDeposit() + calculateBuyersFee();
    };

    // Handle input change
    const handleOfferChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/,/g, '');
        if (value === '' || /^\d+$/.test(value)) {
            setOfferAmount(value);
        }
    };

    // Reset calculator
    const handleReset = () => {
        setOfferAmount('50000');
    };

    const benefits = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Accurate Market Valuation",
            description: "Get a precise property valuation based on current market trends and comparable sales"
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Expert Analysis",
            description: "Our professional team provides detailed insights into your property's value"
        },
        {
            icon: <FileCheck className="w-6 h-6" />,
            title: "Free Assessment",
            description: "No obligation, completely free property valuation service"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 z-0">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
                        <Calculator className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-semibold">Free Property Valuation</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Property <span className="text-yellow-400">Valuation</span> & <br />
                        Deposit Calculator
                    </h1>

                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Get an instant estimate of your deposit and buyer's fees for property auctions in Zimbabwe
                    </p>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-16 -mt-10 relative z-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
                                <Calculator className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-blue-900">Deposit & Fee Calculator</h2>
                        </div>

                        {/* Offer Amount */}
                        <div className="mb-8">
                            <label className="block text-lg font-bold text-gray-800 mb-3">
                                Offer amount
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
                                <input
                                    type="text"
                                    value={formatCurrency(parseAmount(offerAmount))}
                                    onChange={handleOfferChange}
                                    className="w-full pl-12 pr-4 py-4 text-xl font-semibold text-gray-800 bg-white border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Deposit */}
                        <div className="mb-8">
                            <label className="block text-lg font-bold text-gray-800 mb-2">
                                Deposit
                            </label>
                            <p className="text-blue-700 italic mb-3 text-sm">
                                10%, minimum deposit $5,000
                            </p>
                            <div className="bg-gray-100 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                                    <DollarSign className="w-6 h-6 text-gray-600" />
                                    {formatCurrency(calculateDeposit())}
                                </div>
                            </div>
                        </div>

                        {/* Buyer's Fee */}
                        <div className="mb-8">
                            <label className="block text-lg font-bold text-gray-800 mb-2">
                                Buyer's fee inc. VAT
                            </label>
                            <p className="text-blue-700 italic mb-3 text-sm">
                                3% subject to a minimum of $5,000 plus VAT
                            </p>
                            <div className="bg-gray-100 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                                    <DollarSign className="w-6 h-6 text-gray-600" />
                                    {formatCurrency(calculateBuyersFee())}
                                </div>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="mb-8 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
                            <label className="block text-lg font-bold text-gray-800 mb-4">
                                Total payable today if offer accepted (deposit + fee)
                            </label>
                            <div className="flex items-center gap-2 text-4xl font-bold text-blue-900">
                                <DollarSign className="w-8 h-8" />
                                {formatCurrency(calculateTotal())}
                            </div>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={handleReset}
                            className="w-full sm:w-auto px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all transform hover:scale-105"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
                            <Sparkles className="w-5 h-5 text-blue-900" />
                            <span className="text-blue-900 text-sm font-semibold">Why Choose Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                            Professional Valuation Services
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center mb-6 text-yellow-400">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-blue-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <div className="mb-8">
                        <CheckCircle className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Get Your Property Valued?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                            Request a free, professional property valuation from Zimbabwe's premier auction platform
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="https://forms.gle/zATdjtCQJweQnGxW6"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all uppercase tracking-wide"
                        >
                            Request Valuation
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-yellow-400 px-8 py-4 rounded-xl font-bold shadow-lg transform hover:scale-105 transition-all uppercase tracking-wide"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-blue-800">
                        <p className="text-sm text-blue-200 mb-4">Questions? Get in touch:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                            <a
                                href="tel:+263784086388"
                                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                            >
                                📞 +263 784 086 388
                            </a>
                            <a
                                href="mailto:info@fastinproperty.co.zw"
                                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
                            >
                                ✉️ info@fastinproperty.co.zw
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}