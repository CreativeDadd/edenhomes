

'use client'; // This tells Next.js to render this component on the client side
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function AgentPage() {
  const { data: session } = useSession(); // Client-side session handling

  return (
    <section className="bg-white py-16 px-8 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Are You an Experienced Property Agent?
        </h2>
        <p className="text-lg text-green-500 pt-4">
          We partner with agents who have properties that we can onboard into
          our accommodation services. We see our agents as partners of progress
          and we ensure the relationship is mutually beneficial. If you need a
          reliable relocations company to work with, then you can signup below.
        </p>

        <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          {session ? (
            <>
              <span className="text-lg font-semibold text-gray-700">
                {session.user.email}
              </span>
              <Link
                href="/admin/admin-dashboard"
                className="underline text-[#FF7F69] font-medium hover:text-[#FF4B0A] transition-colors"
              >
                Admin DashBoard
              </Link>
              <button
                onClick={() => signOut()}
                className="text-gray-800 hover:text-[#FF7F50] font-medium transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* SignUp Button */}
              <Link
                href="/auth/signup"
                className="font-medium bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-3 px-6 transition-all rounded-full"
              >
                 SignUp
              </Link>

              {/* SignIn Button */}
              <Link
                href="/auth/signin"
                className="border border-[#ff5e24] text-gray-800 font-medium py-3 px-6 rounded-full hover:text-[#ff5e24] transition-colors"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
