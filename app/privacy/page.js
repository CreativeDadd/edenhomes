// app/privacy/page.js
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
      <div className="p-8 mt-24 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to Orange-Sun Homes Limited ("we", "our", "us"). We are committed to protecting and respecting your privacy. This privacy policy explains how we collect, use, and share your personal information when you use our website and services.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of personal information:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Name, email address, and contact details.</li>
          <li>Information related to your property listings or inquiries.</li>
          <li>Payment information for transactions (where applicable).</li>
          <li>Technical data such as IP addresses, browser type, and device information.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your personal information to:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Provide and maintain our services, including processing your inquiries or property listings.</li>
          <li>Communicate with you about your account or property listings.</li>
          <li>Improve our website, services, and user experience.</li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell your personal information to third parties. However, we may share your information with:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Service providers who assist us in delivering our services.</li>
          <li>Law enforcement or regulatory authorities if required by law.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
        <p className="mb-4">
          We take reasonable precautions to protect your personal data from unauthorized access, use, or disclosure. However, please be aware that no data transmission over the internet is completely secure.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your personal information.</li>
          <li>Opt-out of receiving marketing communications from us.</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. Any changes will be posted on this page, and the updated policy will take effect as soon as it is posted.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this privacy policy, please contact us at:
        </p>
        <p className="mb-4">
          <strong>Email:</strong> support@orangesunhomes.com
        </p>
        <p className="mb-4">
          <strong>Address:</strong> Orange-Sun Homes Limited, 123 Main Street, Lagos, Nigeria
        </p>
        <Link
                href="/auth/signup"
                className="font-medium bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-3 px-6 transition-all rounded-full"
              >
                 SignUp
              </Link>

      </div>
    );
  }
  