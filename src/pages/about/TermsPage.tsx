import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, FileText } from "lucide-react";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Use • Fastin Property Auctions";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex items-start sm:items-center justify-between gap-6 flex-col sm:flex-row">
            <div>
              <div className="flex items-center gap-2 text-blue-200/90 text-sm">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Terms of Use</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Terms of Use
              </h1>
              <p className="mt-3 text-blue-100 max-w-2xl">
                Please read these terms carefully. By using our website, you agree to be bound by these terms and our privacy policy.
              </p>
            </div>
            <div className="shrink-0 bg-white/10 rounded-2xl p-4 ring-1 ring-white/20">
              <Shield className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="px-6 sm:px-10 py-8 sm:py-10">
              <div className="flex items-center gap-3 text-blue-700 mb-6">
                <FileText className="w-6 h-6" />
                <h2 className="text-xl sm:text-2xl font-bold">Our Terms at a Glance</h2>
              </div>

              <div className="space-y-6 text-slate-700 text-base leading-relaxed">
                <p>
                  Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern the relationship between you and Fastin Property Auctions in relation to this website.
                </p>
                <p>
                  The terms Company or ‘us’ or ‘we’ or ‘our’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mt-8">The use of this website is subject to the following terms of use:</h3>

                <ol className="list-decimal pl-5 space-y-4 mt-2">
                  <li>
                    The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                  </li>
                  <li>
                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                  </li>
                  <li>
                    Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                  </li>
                  <li>
                    This website contains material which is owned by or licensed to us. This material may include, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                  </li>
                  <li>
                    All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
                  </li>
                  <li>
                    Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
                  </li>
                  <li>
                    From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
                  </li>
                  <li>
                    Your use of this website and any dispute arising out of such use of the website is subject to the laws and jurisdiction of the Republic of Zimbabwe.
                  </li>
                </ol>

                <p className="pt-2 text-sm text-slate-500">
                  If you have any questions about these Terms, please contact us via the details on our Contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
