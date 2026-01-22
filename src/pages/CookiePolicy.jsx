import React, { useEffect } from 'react';

const CookiePolicy = () => {

    return (
        <div className="bg-[#020617] min-h-screen text-gray-300 pt-24 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
                <div className="space-y-8 text-gray-300">
                    <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
                    <p>This Cookie Policy explains how SkillForge Australia ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at [skillforge.com.au] ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. What are cookies?</h2>
                        <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
                        <p>Cookies set by the website owner (in this case, SkillForge) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. advertising, interactive content and analytics).</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Why do we use cookies?</h2>
                        <p>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.</p>
                        <div className="ml-4 space-y-4 mt-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies:</h3>
                                <p>These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Performance & Analytics Cookies:</h3>
                                <p>These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Targeting Cookies:</h3>
                                <p>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. How can I control cookies?</h2>
                        <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser controls. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
                        <p>Most web browsers allow you to control cookies through their settings preferences. To find out more about how to manage cookies on popular browsers:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2 marker:text-primary">
                            <li>Google Chrome</li>
                            <li>Mozilla Firefox</li>
                            <li>Microsoft Edge</li>
                            <li>Apple Safari</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
