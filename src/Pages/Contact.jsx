

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-semibold mb-4">Contact Us</h1>

            <p className="text-gray-700 mb-6">
                If you have any questions, feedback, or need assistance, feel free to reach out to us. We are here to help you make the most out of our Task Management System.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Customer Support</h2>
                    <p className="text-gray-700 mb-4">
                        Our dedicated customer support team is available to assist you with any inquiries or issues you may have.
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> support@taskhub.com
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-3">Sales and Inquiries</h2>
                    <p className="text-gray-700 mb-4">
                        For sales-related questions or general inquiries about our Task Management System, please contact our sales team.
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> sales@taskhub.com
                    </p>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-3">Visit Us</h2>
                <p className="text-gray-700 mb-4">
                    We welcome you to visit our office for a more personalized experience or to discuss your specific needs in person.
                </p>
                <p className="text-gray-700">
                    <strong>Address:</strong> CHittagong, Bangladesh
                </p>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-3">Connect With Us</h2>
                <p className="text-gray-700 mb-4">
                    Stay updated on the latest news and announcements by following us on social media.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                    <a href="#" className="text-indigo-500 hover:underline">Facebook</a>
                    <a href="#" className="text-purple-500 hover:underline">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;