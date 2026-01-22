import React, { useEffect } from 'react';

const RefundPolicy = () => {

    return (
        <div className="bg-[#020617] min-h-screen text-gray-300 pt-24 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Refund Policy</h1>
                <div className="space-y-8 text-gray-300">
                    <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>Thank you for shopping at SkillForge. Our goal is to ensure you are completely satisfied with your purchase. However, we understand that sometimes things don't work out as planned. This Refund Policy outlines the terms and conditions for refunds on our courses.</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Refund Eligibility Period</h2>
                        <p>We offer a <strong>7-day money-back guarantee</strong> for all individual course purchases. If you are not satisfied with the course, you may request a refund within 7 days of the purchase date.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Conditions for Refund</h2>
                        <p>To be eligible for a refund, the following conditions must be met:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 marker:text-primary">
                            <li>The refund request is submitted within 7 days of the original purchase date.</li>
                            <li>You have consumed less than <strong>20%</strong> of the course content.</li>
                            <li>You have not downloaded or viewed offline more than 20% of the course material.</li>
                            <li>You have not completed the course or obtained a certificate of completion.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Non-Refundable Items</h2>
                        <p>The following items are not eligible for refunds:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 marker:text-primary">
                            <li>Subscription plans (after the initial trial period, if applicable).</li>
                            <li>Course bundles where more than 20% of the total content has been accessed.</li>
                            <li>Coaching or mentorship sessions that have already been attended or missed without prior notice.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. How to Request a Refund</h2>
                        <p>To request a refund, please follow these steps:</p>
                        <ol className="list-decimal list-inside ml-4 space-y-2 marker:text-primary">
                            <li>Email our support team at <span className="text-white font-medium">Info@skillforge.com.au</span> with your Order ID and the email address used for purchase.</li>
                            <li>Provide a brief reason for your refund request (this helps us improve our courses).</li>
                            <li>We will review your request and notify you of the approval or rejection of your refund within 2 business days.</li>
                        </ol>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Refund Processing</h2>
                        <p>If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies (typically 5-10 business days).</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
                        <p>If you have any questions about our Refund Policy, please contact us:</p>
                        <p className="font-semibold text-white">Info@skillforge.com.au</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
