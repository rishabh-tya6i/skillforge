import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="bg-[#020617] min-h-screen text-gray-300 pt-24 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <div className="space-y-8 text-gray-300">
                    <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>At SkillForge, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website [skillforge.com.au] or use our services. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
                        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 marker:text-primary">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                            <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Use of Your Information</h2>
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 marker:text-primary">
                            <li>Create and manage your account.</li>
                            <li>Process your payments and refunds.</li>
                            <li>Send you an email regarding your account or order.</li>
                            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                            <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                            <li>Increase the efficiency and operation of the Site.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                            <li>Notify you of updates to the Site.</li>
                            <li>Offer new products, services, and/or recommendations to you.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Disclosure of Your Information</h2>
                        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 marker:text-primary">
                            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. Security of Your Information</h2>
                        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Policy for Children</h2>
                        <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware that any data we have collected is from children under the age of 13, please contact us using the contact information provided below.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
                        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                        <p className="font-semibold text-white">Info@skillforge.com.au</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
