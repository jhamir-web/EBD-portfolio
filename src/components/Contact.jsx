import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Contact({ prefilledProject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: prefilledProject || 'Proposed Renovation / Remodel',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || '78c4d320-a3b0-43f8-ad4b-cba2a89c2ce9';
    const customEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    try {
      if (customEndpoint) {
        const response = await fetch(customEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (!response.ok) throw new Error('Server returned an error');
        setSubmitted(true);
      } else {
        const formPayload = new FormData();
        formPayload.append('access_key', web3FormsKey);
        formPayload.append('subject', `[E Design & Build] Project Inquiry from ${formData.name}`);
        formPayload.append('from_name', formData.name);
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('phone', formData.phone || 'Not provided');
        formPayload.append('project_type', formData.projectType);
        formPayload.append('message', formData.message);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formPayload
        });

        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMsg('Unable to send automatically. Please reach out directly to johnervin0709@gmail.com or 0961 336 4683.');
    } finally {
      setLoading(false);
    }
  };

  const projectTypes = [
    'Proposed Renovation / Remodel',
    'Residential Architectural Design',
    'House Extension / Second Floor Addition',
    'Fence, Gate & Garage Canopy',
    'Commercial / Mixed-Use Facility',
    'General Construction / Turnkey Build',
    'Other Architectural Consultation'
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#F7F7F5] relative border-b border-[#0B1B33]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: CTA + Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-3">
                <span className="w-2 h-[2px] bg-[#E8752A]"></span>
                05 / INITIATE A PROJECT
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-[#0B1B33] leading-[0.92]">
                LET'S BUILD
                <br />
                <span className="text-[#0B1B33]/85 relative">
                  SOMETHING WELL.
                  <span className="absolute -bottom-2 left-0 w-16 sm:w-24 h-[3px] bg-[#E8752A]"></span>
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg font-light text-[#0B1B33]/80 leading-relaxed max-w-lg">
                Have a project in mind? Let's talk about it.
              </p>
            </div>

            {/* Contact Info — compact 2-col grid on mobile */}
            <div className="pt-5 border-t border-[#0B1B33]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-[#0B1B33]/10 text-[#E8752A] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1B33]/50">Studio</div>
                  <div className="text-sm font-medium text-[#0B1B33]">Malolos, Bulacan, Philippines</div>
                  <div className="text-xs text-[#0B1B33]/60 font-light leading-tight">Central Luzon &amp; Greater Manila</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-[#0B1B33]/10 text-[#E8752A] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1B33]/50">Email</div>
                  <a
                    href="mailto:johnervin0709@gmail.com"
                    className="text-sm font-medium text-[#0B1B33] font-mono hover:text-[#E8752A] transition-colors break-all"
                  >
                    johnervin0709@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-[#0B1B33]/10 text-[#E8752A] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1B33]/50">Phone / Viber</div>
                  <a
                    href="tel:09613364683"
                    className="text-sm font-medium text-[#0B1B33] font-mono hover:text-[#E8752A] transition-colors"
                  >
                    0961 336 4683
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-[#0B1B33]/10 text-[#E8752A] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1B33]/50">Hours</div>
                  <div className="text-sm font-medium text-[#0B1B33]">Mon–Sat, 8AM–6PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-[#0B1B33]/15 shadow-[0_16px_40px_rgba(11,27,51,0.04)] relative">
            <div className="absolute top-3 right-3 text-[9px] font-mono text-[#0B1B33]/40 tracking-wider">
              FORM 2026.A
            </div>

            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 bg-[#0B1B33] text-[#E8752A] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#0B1B33]">
                  Project Inquiry Received
                </h3>
                <p className="text-sm text-[#0B1B33]/70 font-light max-w-sm">
                  Thank you for reaching out to E Design &amp; Build. Our team will review your project parameters and respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      projectType: 'Proposed Renovation / Remodel',
                      message: ''
                    });
                  }}
                  className="mt-2 px-6 py-2.5 bg-[#0B1B33] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#101F36] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-1.5">
                    Full Name <span className="text-[#E8752A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Homeowner, Developer"
                    className="w-full px-4 py-2.5 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Email + Phone side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-1.5">
                      Email <span className="text-[#E8752A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+63 9XX XXX XXXX"
                      className="w-full px-4 py-2.5 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors"
                  >
                    {projectTypes.map((pt, i) => (
                      <option key={i} value={pt}>{pt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-1.5">
                    Project Details &amp; Location <span className="text-[#E8752A]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, location, and timeframe..."
                    className="w-full px-4 py-2.5 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-[#0B1B33] text-white hover:bg-[#101F36] uppercase text-xs tracking-[0.2em] font-semibold flex items-center justify-center gap-3 border border-[#0B1B33] hover:border-[#E8752A] transition-all duration-300 group"
                >
                  <span>{loading ? 'TRANSMITTING...' : 'START A CONVERSATION'}</span>
                  <ArrowRight className="w-4 h-4 text-[#E8752A] group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
