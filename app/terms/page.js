// /app/terms/page.jsx
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="container mx-auto p-6 mt-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

      <p className="mb-4">Welcome to <strong>Orange-Sun Homes Limited</strong>. Please read these terms and conditions carefully before using our services.</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using our website and services, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on this page. It is your responsibility to check this page periodically for updates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Use of Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in accordance with these terms. Any unauthorized use of our services will result in termination of your access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. User Accounts</h2>
        <p className="mb-4">
          To access some of our services, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          Orange-Sun Homes Limited will not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Intellectual Property</h2>
        <p className="mb-4">
          All content provided on our website, including text, images, and software, is the property of Orange-Sun Homes Limited. You may not reproduce, distribute, or modify any part of this content without our prior written consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to our services at any time, without notice, for conduct that violates these terms or is otherwise harmful to other users or us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
        <p className="mb-4">
          These terms shall be governed by and construed in accordance with the laws of the country where Orange-Sun Homes Limited operates, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these terms, please <Link href="/contact" className="text-blue-500 underline">contact us</Link>.
        </p>
      </section>

      <div className="text-center mt-8">
        <Link className=" underline text-[#FF7F50]  hover:text-white py-2 px-4 rounded-md hover:bg-[#FF4500] transition duration-300" href="auth/signup">
          Back to sign up
        </Link>
      </div>
    </div>
  );
}
