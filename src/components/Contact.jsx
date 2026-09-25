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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
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
    <section id="contact" className="py-24 sm:py-32 bg-[#F7F7F5] relative border-b border-[#0B1B33]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Editorial CTA Statement */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-4">
                <span className="w-2 h-[2px] bg-[#E8752A]"></span>
                05 / INITIATE A PROJECT
              </div>

              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0B1B33] leading-[0.92]">
                LET’S BUILD
                <br />
                <span className="text-[#0B1B33]/85 relative">
                  SOMETHING WELL.
                  <span className="absolute -bottom-3 left-0 w-24 h-[3px] bg-[#E8752A]"></span>
                </span>
              </h2>

              <p className="mt-8 text-lg sm:text-xl font-light text-[#0B1B33]/80 leading-relaxed max-w-lg">
                Have a project in mind? Let’s talk about it.
              </p>
              <p className="mt-2 text-sm text-[#0B1B33]/60 font-normal leading-relaxed max-w-md">
                Whether you need architectural blueprints, a bungalow renovation, or an integrated construction partner, our team is ready to review your site parameters.
              </p>
            </div>

            {/* Studio Coordinates & Contact Information */}
            <div className="pt-8 border-t border-[#0B1B33]/15 space-y-5">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-[#0B1B33]/10 text-[#E8752A]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1B33]/50">
                    STUDIO LOCATION
                  </div>
                  <div className="text-sm font-medium text-[#0B1B33]">
                    Malolos, Bulacan, Philippines
                  </div>
                  <div className="text-xs text-[#0B1B33]/60 font-light">
                    Serving Central Luzon, Greater Manila & Regional Project Sites
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-[#0B1B33]/10 text-[#E8752A]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1B33]/50">
                    EMAIL INQUIRIES
                  </div>
                  <div className="text-sm font-medium text-[#0B1B33] font-mono">
                    inquiries@edesignbuild.ph
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white border border-[#0B1B33]/10 text-[#E8752A]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1B33]/50">
                    CONSULTATION HOURS
                  </div>
                  <div className="text-sm font-medium text-[#0B1B33]">
                    Monday – Saturday, 8:00 AM – 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Project Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 border border-[#0B1B33]/15 shadow-[0_16px_40px_rgba(11,27,51,0.04)] relative">
            {/* Corner Precision Marker */}
            <div className="absolute top-3 right-3 text-[9px] font-mono text-[#0B1B33]/40 tracking-wider">
              FORM 2026.A
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 bg-[#0B1B33] text-[#E8752A] rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#0B1B33]">
                  Project Inquiry Received
                </h3>
                <p className="text-sm text-[#0B1B33]/70 font-light max-w-sm">
                  Thank you for reaching out to E Design & Build. Our architectural team will review your project parameters and respond promptly.
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
                  className="mt-4 px-6 py-2.5 bg-[#0B1B33] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#101F36] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-2">
                    Your Full Name <span className="text-[#E8752A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Architect, Homeowner, or Developer"
                    className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-2">
                      Email Address <span className="text-[#E8752A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-2">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+63 9XX XXX XXXX"
                      className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-2">
                    Project Typology / Service
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors"
                  >
                    {projectTypes.map((pt, i) => (
                      <option key={i} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/70 mb-2">
                    Project Details & Site Location <span className="text-[#E8752A]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project requirements, location, target timeframe, or any preliminary ideas..."
                    className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#0B1B33]/15 text-[#0B1B33] text-sm focus:border-[#0B1B33] focus:bg-white focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-[#0B1B33] text-white hover:bg-[#101F36] uppercase text-xs tracking-[0.2em] font-semibold flex items-center justify-center gap-3 border border-[#0B1B33] hover:border-[#E8752A] transition-all duration-300 group shadow-xs"
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
